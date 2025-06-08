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
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description.substring(0, 100)}...</p>
            <span class="product-category">${getCategoryName(product.category)}</span>
        </div>
    `;
    
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

// Lazy loading for images
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
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