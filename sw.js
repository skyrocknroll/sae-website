// Service Worker for Sree Abirami Equipment Website
// Provides caching and offline functionality for improved performance

const CACHE_NAME = 'sree-abirami-v1.0.1';
const urlsToCache = [
  './index.html',
  './about.html',
  './contact.html',
  './infrastructure.html',
  './product-service.html',
  './styles.css',
  './script.js',
  './images/sree-abirami-equipments.png',
  './images/shot-blasting-machine.png',
  './images/iIntensive-mixer.png',
  './images/vibratory-shakeout.png',
  './images/ladles.png',
  './images/sand-cooler.png',
  './images/dust-collector.png'
];

// Install Service Worker with error handling
self.addEventListener('install', (event) => {
  console.log('🔧 SW: Installing service worker...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('✅ SW: Cache opened successfully');
        // Add files individually to handle failures gracefully
        return Promise.allSettled(
          urlsToCache.map(url =>
            cache.add(url).catch(err => {
              console.warn('⚠️ SW: Failed to cache:', url, err);
              return null;
            })
          )
        );
      })
      .then(() => {
        console.log('✅ SW: Installation completed');
        self.skipWaiting(); // Force activation
      })
      .catch((error) => {
        console.error('❌ SW: Installation failed:', error);
      })
  );
});

// Fetch Event - Serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Only handle HTTP/HTTPS requests, skip chrome-extension and other schemes
  if (!event.request.url.startsWith('http')) {
    return;
  }
  
  // Add diagnostic logging for image requests
  if (event.request.url.includes('/images/') || event.request.destination === 'image') {
    console.log('🔍 SW DIAGNOSTIC: Image request:', event.request.url);
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          if (event.request.url.includes('/images/')) {
            console.log('✅ SW DIAGNOSTIC: Serving image from cache:', event.request.url);
          }
          return response;
        }
        
        if (event.request.url.includes('/images/')) {
          console.log('🔍 SW DIAGNOSTIC: Fetching image from network:', event.request.url);
        }
        
        return fetch(event.request).then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            if (event.request.url.includes('/images/')) {
              console.error('❌ SW DIAGNOSTIC: Invalid response for image:', event.request.url, response?.status);
            }
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache).catch((error) => {
                // Silently handle cache errors for unsupported schemes
                if (event.request.url.includes('/images/')) {
                  console.warn('⚠️ SW DIAGNOSTIC: Cache error for image:', event.request.url, error.message);
                }
              });
              if (event.request.url.includes('/images/')) {
                console.log('💾 SW DIAGNOSTIC: Cached image:', event.request.url);
              }
            });

          return response;
        }).catch((error) => {
          if (event.request.url.includes('/images/')) {
            console.error('❌ SW DIAGNOSTIC: Network error for image:', event.request.url, error);
          }
          throw error;
        });
      })
  );
});

// Activate Service Worker - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background Sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForm());
  }
});

// Function to sync contact form data when online
function syncContactForm() {
  return new Promise((resolve, reject) => {
    // Implementation for syncing offline form submissions
    // This would typically involve retrieving stored form data
    // and submitting it when the connection is restored
    resolve();
  });
}

// Push notification handling (for future use)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update from Sree Abirami Equipment',
    icon: '/images/sree-abirami-equipments.png',
    badge: '/images/sree-abirami-equipments.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Products',
        icon: '/images/sree-abirami-equipments.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/images/sree-abirami-equipments.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Sree Abirami Equipment', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/product-service.html')
    );
  } else if (event.action === 'close') {
    // Just close the notification
  } else {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});