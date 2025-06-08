// Product data with all 20 products from the image inventory
const products = [
    {
        id: 1,
        name: "Pedestal Grinder",
        image: "images/pedestal-grinder.png",
        description: "Heavy fabrication MS grinder with adjustable job table heights. Available in wheel sizes from Dia 300mm to 500mm with drive ranges of 5HP, 7.5HP, 10HP, and 12.5HP.",
        category: "other",
        features: [
            "MS heavy fabrication construction",
            "Adjustable job table heights",
            "Multiple wheel size options",
            "Various drive power options",
            "Robust and durable design"
        ]
    },
    {
        id: 2,
        name: "Cold Box Core Shooter",
        image: "images/cold-box-core-shooter.png",
        description: "High productivity core shooting machine designed for efficient core production in foundry operations.",
        category: "other",
        features: [
            "High productivity design",
            "Precise core shooting",
            "Automated operation",
            "Consistent core quality",
            "Energy efficient"
        ]
    },
    {
        id: 3,
        name: "Mould Box",
        image: "images/mould-box.bmp",
        description: "Cast iron and ductile iron moulding boxes for various foundry applications with superior durability.",
        category: "handling",
        features: [
            "Cast iron construction",
            "Ductile iron options",
            "Various sizes available",
            "Superior durability",
            "Precision machined"
        ]
    },
    {
        id: 4,
        name: "Sand Dryer",
        image: "images/sand-dryer.png",
        description: "Single shell design rotary sand dryer for efficient moisture removal from foundry sand.",
        category: "mixing",
        features: [
            "Single shell rotary design",
            "Efficient moisture removal",
            "Energy optimized",
            "Continuous operation",
            "Low maintenance"
        ]
    },
    {
        id: 5,
        name: "Sand Reclamation Plant",
        image: "images/sand-reclamation-plant.png",
        description: "Mechanical type reclamation system specifically designed for CO2 sand recovery and reuse.",
        category: "mixing",
        features: [
            "Mechanical reclamation process",
            "CO2 sand recovery",
            "High efficiency operation",
            "Environmental friendly",
            "Cost effective solution"
        ]
    },
    {
        id: 6,
        name: "Shot Blasting Machine",
        image: "images/shot-blasting-machine.png",
        description: "Hanger type shot blasting machine for effective casting cleaning and surface preparation.",
        category: "blasting",
        features: [
            "Hanger type design",
            "Effective casting cleaning",
            "Superior surface preparation",
            "Dust collection system",
            "Automated operation"
        ]
    },
    {
        id: 7,
        name: "Vibratory ShakeOut",
        image: "images/vibratory-shakeout.png",
        description: "Unbalanced vibromotor knockout system for efficient sand separation from castings.",
        category: "handling",
        features: [
            "Unbalanced vibromotor design",
            "Efficient sand separation",
            "Robust construction",
            "Low power consumption",
            "Minimal maintenance"
        ]
    },
    {
        id: 8,
        name: "Moulding Machine",
        image: "images/moulding-machine.png",
        description: "Jolt squeeze technology moulding machine for creating uniform moulds with consistent quality.",
        category: "other",
        features: [
            "Jolt squeeze technology",
            "Uniform mould creation",
            "Consistent quality output",
            "Automated operation",
            "High productivity"
        ]
    },
    {
        id: 9,
        name: "Ladles",
        image: "images/ladles.png",
        description: "Comprehensive range including lip pouring, bottom pouring, and SG treatment ladles for molten metal handling.",
        category: "molten",
        features: [
            "Lip pouring ladles",
            "Bottom pouring ladles",
            "SG treatment ladles",
            "Heat resistant construction",
            "Various capacity options"
        ]
    },
    {
        id: 10,
        name: "Polygonal Siever",
        image: "images/polygonal-siever.png",
        description: "Rotary type sand sieving and lump breaking equipment for sand preparation and conditioning.",
        category: "handling",
        features: [
            "Rotary sieving mechanism",
            "Lump breaking capability",
            "Efficient sand conditioning",
            "Continuous operation",
            "Adjustable screening"
        ]
    },
    {
        id: 11,
        name: "Simple Shot Blasting Machine",
        image: "images/simple-shot-blasting-machine.png",
        description: "Y type/monorail compact design shot blasting machine for smaller casting cleaning operations.",
        category: "blasting",
        features: [
            "Y type/monorail design",
            "Compact construction",
            "Suitable for smaller castings",
            "Easy operation",
            "Cost effective solution"
        ]
    },
    {
        id: 12,
        name: "Dust Collector",
        image: "images/dust-collector.png",
        description: "Impulse jet cassette type filter system for effective dust collection and air purification.",
        category: "other",
        features: [
            "Impulse jet technology",
            "Cassette type filters",
            "High filtration efficiency",
            "Automatic cleaning",
            "Environmental compliance"
        ]
    },
    {
        id: 13,
        name: "Intensive Mixer",
        image: "images/iIntensive-mixer.png",
        description: "High speed blender with low speed rotor for intensive mixing of foundry materials.",
        category: "mixing",
        features: [
            "High speed blending",
            "Low speed rotor design",
            "Intensive mixing action",
            "Uniform material distribution",
            "Energy efficient operation"
        ]
    },
    {
        id: 14,
        name: "Tumblast Machine",
        image: "images/tumblast-machine.png",
        description: "Rubber conveyor type tumblast machine for continuous component cleaning and surface treatment.",
        category: "blasting",
        features: [
            "Rubber conveyor design",
            "Continuous operation",
            "Component cleaning",
            "Surface treatment",
            "Automated handling"
        ]
    },
    {
        id: 15,
        name: "Pneumatic Conveyor",
        image: "images/pneumatic-conveyor.png",
        description: "Dense phase pneumatic conveying system for sand and additives transport in foundry operations.",
        category: "handling",
        features: [
            "Dense phase conveying",
            "Sand and additives transport",
            "Enclosed system",
            "Dust free operation",
            "Flexible routing"
        ]
    },
    {
        id: 16,
        name: "Ladle Pre Heater",
        image: "images/ladle-pre-heater.png",
        description: "Vertical and horizontal type preheating system for ladle conditioning before molten metal handling.",
        category: "molten",
        features: [
            "Vertical and horizontal types",
            "Efficient preheating",
            "Ladle conditioning",
            "Energy optimized",
            "Temperature control"
        ]
    },
    {
        id: 17,
        name: "Punch Out Machine",
        image: "images/punch-out-machine.png",
        description: "Hydro mechanical drive punch out machine for high productivity casting extraction operations.",
        category: "handling",
        features: [
            "Hydro mechanical drive",
            "High productivity operation",
            "Casting extraction",
            "Precise control",
            "Robust construction"
        ]
    },
    {
        id: 18,
        name: "Knockout Cum Feeder",
        image: "images/knockout-cum-feeder.png",
        description: "Double eccentric shaft vibratory system for knockout and feeding operations in foundry processes.",
        category: "handling",
        features: [
            "Double eccentric shaft",
            "Vibratory operation",
            "Knockout and feeding",
            "Continuous process",
            "Reliable performance"
        ]
    },
    {
        id: 19,
        name: "Sand Cooler",
        image: "images/sand-cooler.png",
        description: "Fluidized bed sand cooling system using water and air for efficient temperature reduction.",
        category: "mixing",
        features: [
            "Fluidized bed design",
            "Water and air cooling",
            "Efficient temperature reduction",
            "Continuous operation",
            "Energy efficient"
        ]
    },
    {
        id: 20,
        name: "Sand Mix Muller",
        image: "images/sand-mix-muller.png",
        description: "Heavy duty sand preparation equipment with adjustable pressure for consistent sand mixing.",
        category: "mixing",
        features: [
            "Heavy duty construction",
            "Adjustable pressure",
            "Consistent sand mixing",
            "Superior mixing action",
            "Durable design"
        ]
    }
];

// DOM Elements
const productsGrid = document.querySelector('.products-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalFeatures = document.getElementById('modalFeatures');
const closeModal = document.querySelector('.close');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Only render products if products grid exists (product-service page)
    if (productsGrid) {
        renderProducts(products);
    }
    initializeEventListeners();
    initializeAnimations();
});

// Render products
function renderProducts(productsToRender) {
    productsGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Add animation delay for staggered effect
    const cards = productsGrid.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" style="opacity: 0; transition: opacity 0.3s ease;">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description.substring(0, 100)}...</p>
            <span class="product-category">${getCategoryName(product.category)}</span>
        </div>
    `;
    
    // Handle image loading properly for dynamically created images
    const img = card.querySelector('img');
    const imageContainer = card.querySelector('.product-image');
    
    img.onload = function() {
        this.style.opacity = '1';
        imageContainer.classList.add('loaded');
        console.log('✅ Product image loaded:', product.name);
    };
    
    img.onerror = function() {
        console.error('❌ Failed to load product image:', product.image);
        this.style.opacity = '1';
        this.alt = `${product.name} - Image not available`;
        imageContainer.classList.add('loaded');
    };
    
    // Fallback timeout to ensure spinner disappears
    setTimeout(() => {
        if (img.style.opacity !== '1') {
            img.style.opacity = '1';
            imageContainer.classList.add('loaded');
            console.log('⏰ Timeout fallback for:', product.name);
        }
    }, 5000);
    
    card.addEventListener('click', () => openModal(product));
    
    return card;
}

// Get category display name
function getCategoryName(category) {
    const categoryNames = {
        'blasting': 'Shot Blasting',
        'mixing': 'Mixing & Preparation',
        'handling': 'Material Handling',
        'molten': 'Molten Metal',
        'other': 'Other Equipment'
    };
    return categoryNames[category] || category;
}

// Filter products
function filterProducts(category) {
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    renderProducts(filteredProducts);
}

// Open modal
function openModal(product) {
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalTitle.textContent = product.name;
    modalDescription.textContent = product.description;
    
    // Render features
    modalFeatures.innerHTML = `
        <h4>Key Features:</h4>
        <ul>
            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModalFunction() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Initialize event listeners
function initializeEventListeners() {
    // Filter buttons (only on product-service page)
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                // Filter products
                const category = button.getAttribute('data-filter');
                filterProducts(category);
            });
        });
    }
    
    // Modal close events (only on product-service page)
    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunction);
    }
    
    if (modal) {
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModalFunction();
            }
        });
        
        // Escape key to close modal
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.style.display === 'block') {
                closeModalFunction();
            }
        });
    }
    
    // Mobile navigation
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Category cards click events
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            const productsSection = document.querySelector('.products');
            
            // Only scroll if products section exists
            if (productsSection) {
                productsSection.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Filter products after scroll (only if filter buttons exist)
                if (filterButtons.length > 0) {
                    setTimeout(() => {
                        // Update filter buttons
                        filterButtons.forEach(btn => btn.classList.remove('active'));
                        const targetButton = document.querySelector(`[data-filter="${category}"]`);
                        if (targetButton) {
                            targetButton.classList.add('active');
                            filterProducts(category);
                        }
                    }, 500);
                }
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize animations
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.category-card, .service-card, .quality-content').forEach(el => {
        observer.observe(el);
    });
    
    // Counter animation for hero stats
    animateCounters();
}

// Animate counters
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = counter.textContent.replace(/\d+/, target);
                clearInterval(timer);
            } else {
                counter.textContent = counter.textContent.replace(/\d+/, Math.floor(current));
            }
        }, 20);
    };
    
    // Trigger animation when hero section is visible
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => animateCounter(counter));
                heroObserver.unobserve(entry.target);
            }
        });
    });
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
}

// Search functionality (can be extended)
function searchProducts(query) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    renderProducts(filteredProducts);
}

// Fixed Lazy loading with robust fallback mechanism
function initializeLazyLoading() {
    console.log('🔧 FIXING: Initializing improved lazy loading...');
    
    let lazyLoadingFailed = false;
    let loadedImagesCount = 0;
    let totalLazyImages = 0;
    
    // Fallback function to disable lazy loading entirely
    function disableLazyLoading() {
        console.log('🚨 FALLBACK: Disabling lazy loading, loading all images immediately');
        lazyLoadingFailed = true;
        
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            img.removeAttribute('loading');
            img.style.opacity = '1';
            img.classList.add('fallback-loaded');
            console.log('🔧 FALLBACK: Force loading image:', img.src);
        });
    }
    
    // Set a timeout to trigger fallback if lazy loading fails
    const fallbackTimeout = setTimeout(() => {
        if (loadedImagesCount === 0 && totalLazyImages > 0) {
            console.log('⏰ TIMEOUT: Lazy loading appears to have failed, triggering fallback');
            disableLazyLoading();
        }
    }, 3000); // 3 second timeout
    
    if ('IntersectionObserver' in window && !lazyLoadingFailed) {
        console.log('✅ IntersectionObserver supported, attempting lazy loading');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !lazyLoadingFailed) {
                    const img = entry.target;
                    
                    // Simple and reliable loading approach
                    if (img.getAttribute('loading') === 'lazy') {
                        console.log('🔧 Loading image:', img.src);
                        
                        // Remove loading attribute to trigger native loading
                        img.removeAttribute('loading');
                        
                        // Set up success handler
                        const handleSuccess = () => {
                            loadedImagesCount++;
                            img.style.opacity = '1';
                            img.classList.add('lazy-loaded');
                            console.log('✅ Image loaded successfully:', img.src);
                            
                            // Clear timeout if we're successfully loading images
                            if (loadedImagesCount === 1) {
                                clearTimeout(fallbackTimeout);
                            }
                        };
                        
                        // Set up error handler
                        const handleError = () => {
                            console.error('❌ Image failed to load:', img.src);
                            img.style.opacity = '0.5';
                            img.classList.add('lazy-error');
                            
                            // If multiple images fail, trigger fallback
                            if (document.querySelectorAll('.lazy-error').length > 3) {
                                disableLazyLoading();
                            }
                        };
                        
                        // Check if image is already loaded
                        if (img.complete && img.naturalWidth > 0) {
                            handleSuccess();
                        } else {
                            img.onload = handleSuccess;
                            img.onerror = handleError;
                            
                            // Force a reload to trigger events
                            const currentSrc = img.src;
                            img.src = '';
                            img.src = currentSrc;
                        }
                    }
                    
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '100px 0px', // Increased margin for better UX
            threshold: 0.1
        });
        
        // Observe all lazy loading images
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        totalLazyImages = lazyImages.length;
        console.log('🔧 Found', totalLazyImages, 'lazy loading images');
        
        if (totalLazyImages === 0) {
            clearTimeout(fallbackTimeout);
            console.log('ℹ️ No lazy loading images found');
            return;
        }
        
        lazyImages.forEach(img => {
            // Set initial styles for smooth loading
            img.style.transition = 'opacity 0.3s ease';
            img.style.opacity = '0.1';
            imageObserver.observe(img);
        });
        
    } else {
        console.log('🚨 IntersectionObserver not supported or lazy loading disabled, using immediate fallback');
        disableLazyLoading();
    }
}

// Performance optimization: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}, 250));

// Add CSS classes for animations
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-in {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.6s ease;
    }
    
    .category-card,
    .service-card,
    .quality-content {
        opacity: 0;
        transform: translateY(30px);
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;
document.head.appendChild(style);
// FAQ Functionality
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
}

// Initialize FAQ when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeFAQ();
    initializeLazyLoading();
    initializeAccessibilityFeatures();
    initializePerformanceOptimizations();
});

// Accessibility Features
function initializeAccessibilityFeatures() {
    // Add ARIA labels to interactive elements
    document.querySelectorAll('.hamburger').forEach(hamburger => {
        hamburger.setAttribute('aria-label', 'Toggle navigation menu');
        hamburger.setAttribute('aria-expanded', 'false');
    });
    
    // Update hamburger ARIA state
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isExpanded = navMenu.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isExpanded.toString());
        });
    }
    
    // Add keyboard navigation for FAQ items
    document.querySelectorAll('.faq-question').forEach(question => {
        question.setAttribute('tabindex', '0');
        question.setAttribute('role', 'button');
        question.setAttribute('aria-expanded', 'false');
        
        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });
    
    // Update FAQ ARIA states
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            const id = 'faq-' + Math.random().toString(36).substr(2, 9);
            answer.id = id;
            question.setAttribute('aria-controls', id);
            
            // Update ARIA expanded state
            const observer = new MutationObserver(() => {
                const isActive = item.classList.contains('active');
                question.setAttribute('aria-expanded', isActive.toString());
            });
            
            observer.observe(item, { attributes: true, attributeFilter: ['class'] });
        }
    });
}

// Performance Optimizations
function initializePerformanceOptimizations() {
    // Preload critical resources
    const criticalImages = [
        'images/sree-abirami-equipments.png',
        'images/shot-blasting-machine.png',
        'images/iIntensive-mixer.png'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
    
    // Optimize scroll performance
    let ticking = false;
    
    function updateScrollPosition() {
        // Add scroll-based optimizations here
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Optimize resize performance
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Handle resize optimizations
            if (window.innerWidth > 768) {
                if (hamburger) hamburger.classList.remove('active');
                if (navMenu) navMenu.classList.remove('active');
            }
        }, 250);
    }, { passive: true });
}

// Enhanced Error Handling
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    
    // Track errors in analytics if available
    if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
            description: e.error.toString(),
            fatal: false
        });
    }
});

// Service Worker Registration for Caching (Progressive Web App features)
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('✅ SW registered successfully: ', registration);
            })
            .catch(registrationError => {
                console.warn('⚠️ SW registration failed (this is normal for file:// protocol): ', registrationError);
            });
    });
} else if (location.protocol === 'file:') {
    console.log('ℹ️ Service Worker disabled for file:// protocol (this is normal for local testing)');
}

// Critical CSS Loading Optimization
function loadNonCriticalCSS() {
    const nonCriticalCSS = document.querySelectorAll('link[rel="stylesheet"][media="print"]');
    nonCriticalCSS.forEach(link => {
        link.media = 'all';
    });
}

// Load non-critical CSS after page load
window.addEventListener('load', loadNonCriticalCSS);
// Theme management functions removed - always use light mode