// ==========================================
// RAYAN GRAPHICS - ENHANCED JAVASCRIPT WITH GSAP
// ==========================================

// GSAP Registration
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// INITIALIZE ON DOM LOAD
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initEnhancedAnimations();
    initNavigation();
    initForms();
    initScrollEffects();
    initInteractiveElements();
});

// ==========================================
// ENHANCED GSAP ANIMATIONS
// ==========================================

function initEnhancedAnimations() {
    
    // ===== HERO SECTION ANIMATIONS =====
    
    // Animate hero title with stagger and reveal effect
    const titleLines = document.querySelectorAll('.title-line');
    gsap.from(titleLines, {
        duration: 1.2,
        y: 120,
        opacity: 0,
        rotationX: -90,
        transformOrigin: "50% 50% -100px",
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2
    });

    // Hero subtitle with slide and fade
    gsap.from('.hero-subtitle', {
        duration: 1,
        y: 40,
        opacity: 0,
        delay: 0.8,
        ease: "power3.out"
    });

    // Hero stats with pop effect
    gsap.from('.stat', {
        duration: 0.8,
        scale: 0,
        opacity: 0,
        stagger: 0.15,
        delay: 1.2,
        ease: "back.out(2)"
    });

    // Animate stat numbers counting up
    document.querySelectorAll('.stat-number').forEach((stat, index) => {
        const text = stat.textContent;
        const hasPlus = text.includes('+');
        const numericValue = parseFloat(text);
        
        if (!isNaN(numericValue)) {
            gsap.from(stat, {
                duration: 2,
                textContent: 0,
                delay: 1.4 + (index * 0.2),
                ease: "power2.out",
                snap: { textContent: numericValue > 10 ? 1 : 0.1 },
                onUpdate: function() {
                    stat.textContent = hasPlus ? 
                        Math.ceil(this.targets()[0].textContent) + '+' : 
                        parseFloat(this.targets()[0].textContent).toFixed(1);
                }
            });
        }
    });

    // Hero CTA buttons with bounce
    gsap.from('.hero-cta button', {
        duration: 0.6,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        delay: 1.5,
        ease: "back.out(1.7)"
    });

    // Floating cards with 3D rotation
    gsap.from('.floating-card', {
        duration: 1.2,
        scale: 0,
        rotation: 360,
        opacity: 0,
        stagger: 0.2,
        delay: 1.8,
        ease: "elastic.out(1, 0.5)"
    });

    // Add continuous floating animation to cards
    gsap.to('.card-1', {
        y: -20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to('.card-2', {
        y: -25,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
    });

    gsap.to('.card-3', {
        y: -18,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
    });

    // Scroll indicator animation
    gsap.to('.scroll-line', {
        scaleY: 1.5,
        opacity: 0.3,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // ===== SECTION HEADERS ANIMATION =====
    
    gsap.utils.toArray('.section-header').forEach(header => {
        const tag = header.querySelector('.section-tag');
        const title = header.querySelector('.section-title');
        const desc = header.querySelector('.section-desc');

        // Tag slides in from top
        gsap.from(tag, {
            scrollTrigger: {
                trigger: header,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            duration: 0.8,
            y: -50,
            opacity: 0,
            ease: "power3.out"
        });

        // Title reveals with scale
        gsap.from(title, {
            scrollTrigger: {
                trigger: header,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            duration: 1,
            scale: 0.8,
            opacity: 0,
            delay: 0.2,
            ease: "power3.out"
        });

        // Description fades in
        gsap.from(desc, {
            scrollTrigger: {
                trigger: header,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            duration: 0.8,
            y: 30,
            opacity: 0,
            delay: 0.4,
            ease: "power3.out"
        });
    });

    // ===== SERVICE CARDS ANIMATION =====
    
    gsap.utils.toArray('.service-card').forEach((card, index) => {
        // Main card animation
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            duration: 0.8,
            y: 80,
            opacity: 0,
            rotation: 5,
            delay: index * 0.1,
            ease: "power3.out"
        });

        // Icon animation
        const icon = card.querySelector('.service-icon');
        gsap.from(icon, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            duration: 0.6,
            scale: 0,
            rotation: 360,
            delay: index * 0.1 + 0.3,
            ease: "back.out(2)"
        });

        // Features list animation
        const features = card.querySelectorAll('.service-features li');
        gsap.from(features, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            duration: 0.5,
            x: -30,
            opacity: 0,
            stagger: 0.1,
            delay: index * 0.1 + 0.5,
            ease: "power2.out"
        });

        // Button animation
        const button = card.querySelector('.service-btn');
        gsap.from(button, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            duration: 0.6,
            scale: 0.8,
            opacity: 0,
            delay: index * 0.1 + 0.7,
            ease: "back.out(2)"
        });

        // Hover animation
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                y: -12,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                ease: "power2.out"
            });
            gsap.to(icon, {
                duration: 0.4,
                scale: 1.2,
                rotation: 10,
                ease: "back.out(2)"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                y: 0,
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                ease: "power2.inOut"
            });
            gsap.to(icon, {
                duration: 0.4,
                scale: 1,
                rotation: 0,
                ease: "back.out(2)"
            });
        });
    });

    // ===== PORTFOLIO ITEMS ANIMATION =====
    
    gsap.utils.toArray('.portfolio-item').forEach((item, index) => {
        // Staggered reveal with rotation
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            duration: 1,
            scale: 0.7,
            opacity: 0,
            rotationY: 90,
            delay: index * 0.1,
            ease: "power3.out"
        });

        // Overlay animation on scroll
        const overlay = item.querySelector('.portfolio-overlay');
        gsap.from(overlay, {
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            duration: 0.6,
            y: 50,
            opacity: 0,
            delay: index * 0.1 + 0.3,
            ease: "power2.out"
        });

        // Hover effect with scale
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                duration: 0.4,
                scale: 1.08,
                zIndex: 10,
                ease: "power2.out"
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                duration: 0.4,
                scale: 1,
                zIndex: 1,
                ease: "power2.out"
            });
        });
    });

    // ===== REVIEW CARDS ANIMATION =====
    
    gsap.utils.toArray('.review-card').forEach((card, index) => {
        // Slide in from left
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            duration: 0.8,
            x: -100,
            opacity: 0,
            delay: index * 0.15,
            ease: "power3.out"
        });

        // Stars animation
        const stars = card.querySelector('.review-stars');
        gsap.from(stars, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            duration: 0.6,
            scale: 0,
            rotation: 360,
            delay: index * 0.15 + 0.3,
            ease: "back.out(2)"
        });

        // Text fade in
        const text = card.querySelector('.review-text');
        gsap.from(text, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            duration: 0.8,
            opacity: 0,
            y: 20,
            delay: index * 0.15 + 0.5,
            ease: "power2.out"
        });

        // Author animation
        const author = card.querySelector('.review-author');
        gsap.from(author, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            duration: 0.6,
            x: -30,
            opacity: 0,
            delay: index * 0.15 + 0.7,
            ease: "power2.out"
        });
    });

    // Rating box animation
    const ratingBox = document.querySelector('.rating-box');
    if (ratingBox) {
        gsap.from(ratingBox, {
            scrollTrigger: {
                trigger: ratingBox,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            duration: 1,
            scale: 0,
            rotation: 720,
            ease: "elastic.out(1, 0.5)"
        });
    }

    // ===== CONTACT SECTION ANIMATION =====
    
    // Info items slide in
    gsap.utils.toArray('.info-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            duration: 0.6,
            x: -60,
            opacity: 0,
            delay: index * 0.1,
            ease: "power3.out"
        });

        // Icon bounce
        const icon = item.querySelector('.info-icon');
        gsap.from(icon, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            duration: 0.8,
            scale: 0,
            delay: index * 0.1 + 0.2,
            ease: "elastic.out(1, 0.6)"
        });
    });

    // Contact form animation
    const formContainer = document.querySelector('.contact-form-container');
    if (formContainer) {
        gsap.from(formContainer, {
            scrollTrigger: {
                trigger: formContainer,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            duration: 1,
            x: 60,
            opacity: 0,
            ease: "power3.out"
        });

        // Form groups
        const formGroups = formContainer.querySelectorAll('.form-group');
        gsap.from(formGroups, {
            scrollTrigger: {
                trigger: formContainer,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            duration: 0.5,
            y: 30,
            opacity: 0,
            stagger: 0.1,
            delay: 0.3,
            ease: "power2.out"
        });
    }

    // ===== FOOTER ANIMATION =====
    
    const footerSections = document.querySelectorAll('.footer-section');
    gsap.from(footerSections, {
        scrollTrigger: {
            trigger: '.footer',
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: "power3.out"
    });
}

// ==========================================
// SCROLL EFFECTS & PARALLAX
// ==========================================

function initScrollEffects() {
    
    // ===== PARALLAX CMYK CIRCLES =====
    
    gsap.to('.cmyk-circle.cyan', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 250,
        rotation: 90,
        scale: 1.2,
        ease: "none"
    });

    gsap.to('.cmyk-circle.magenta', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: -200,
        rotation: -60,
        scale: 0.8,
        ease: "none"
    });

    gsap.to('.cmyk-circle.yellow', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 220,
        rotation: 120,
        scale: 1.1,
        ease: "none"
    });

    gsap.to('.cmyk-circle.black', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: -180,
        rotation: -90,
        scale: 0.9,
        ease: "none"
    });

    // ===== HERO CONTENT PARALLAX =====
    
    gsap.to('.hero-text', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 100,
        opacity: 0.5,
        ease: "none"
    });

    gsap.to('.hero-image', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: -80,
        ease: "none"
    });

    // ===== NAVBAR BACKGROUND ON SCROLL =====
    
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {
            targets: '.navbar',
            className: 'scrolled'
        }
    });

    // ===== PROGRESS INDICATOR =====
    
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #00bcd4, #e91e63, #ffc107);
        z-index: 9999;
        transform-origin: 0%;
    `;
    document.body.appendChild(progressBar);

    gsap.to(progressBar, {
        scrollTrigger: {
            start: 'top top',
            end: 'max',
            scrub: 0.5
        },
        scaleX: 1,
        ease: "none"
    });
    gsap.set(progressBar, { scaleX: 0 });
}

// ==========================================
// INTERACTIVE ELEMENTS
// ==========================================

function initInteractiveElements() {
    
    // ===== MAGNETIC BUTTON EFFECT =====
    
    document.querySelectorAll('.cta-primary, .cta-secondary, .order-btn, .service-btn').forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            gsap.to(button, {
                duration: 0.3,
                scale: 1.05,
                ease: "power2.out"
            });
        });

        button.addEventListener('mouseleave', (e) => {
            gsap.to(button, {
                duration: 0.3,
                scale: 1,
                ease: "power2.out"
            });
        });

        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(button, {
                duration: 0.3,
                x: x * 0.2,
                y: y * 0.2,
                ease: "power2.out"
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                duration: 0.5,
                x: 0,
                y: 0,
                ease: "elastic.out(1, 0.5)"
            });
        });
    });

    // ===== FLOATING CARDS INTERACTIVE =====
    
    document.querySelectorAll('.floating-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.4,
                scale: 1.1,
                rotation: 0,
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.4,
                scale: 1,
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                ease: "power2.out"
            });
        });
    });

    // ===== INPUT FOCUS ANIMATIONS =====
    
    document.querySelectorAll('input, textarea, select').forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                duration: 0.3,
                scale: 1.02,
                boxShadow: "0 0 0 3px rgba(0, 188, 212, 0.2)",
                ease: "power2.out"
            });
        });

        input.addEventListener('blur', () => {
            gsap.to(input, {
                duration: 0.3,
                scale: 1,
                boxShadow: "none",
                ease: "power2.out"
            });
        });
    });

    // ===== NAV LINKS ANIMATION =====
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                duration: 0.3,
                y: -3,
                ease: "power2.out"
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                duration: 0.3,
                y: 0,
                ease: "power2.out"
            });
        });
    });
}

// ==========================================
// NAVIGATION
// ==========================================

function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle with animation
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isActive = navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');

            if (isActive) {
                gsap.from('.nav-menu .nav-link', {
                    duration: 0.5,
                    x: -50,
                    opacity: 0,
                    stagger: 0.1,
                    ease: "power3.out"
                });
            }
        });
    }

    // Close mobile menu when link clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        // Navbar scroll effect
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Active nav link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// HELPER FUNCTIONS
// ==========================================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function scrollToOrder() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const offsetTop = contactSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ==========================================
// ORDER MODAL
// ==========================================

let selectedServiceName = '';

function openOrderModal(serviceName) {
    selectedServiceName = serviceName;
    const modal = document.getElementById('orderModal');
    const serviceSpan = document.getElementById('selectedService');
    if (serviceSpan) serviceSpan.textContent = serviceName;
    if (modal) modal.style.display = 'block';
    
    // Animate modal entry
    gsap.from('.modal-content', {
        duration: 0.4,
        scale: 0.7,
        opacity: 0,
        y: -50,
        ease: 'back.out(1.7)'
    });
    
    // Animate form elements
    gsap.from('.modal-content h2, .modal-subtitle', {
        duration: 0.5,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        delay: 0.2,
        ease: "power3.out"
    });
    
    gsap.from('.form-group', {
        duration: 0.4,
        x: -30,
        opacity: 0,
        stagger: 0.05,
        delay: 0.3,
        ease: "power2.out"
    });
    
    // Update price estimate based on service
    updatePriceEstimate(serviceName);
}

function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    gsap.to('.modal-content', {
        duration: 0.3,
        scale: 0.7,
        opacity: 0,
        y: 50,
        ease: 'power2.in',
        onComplete: () => {
            if (modal) modal.style.display = 'none';
        }
    });
}

function updatePriceEstimate(serviceName) {
    const priceElement = document.getElementById('estimatedPrice');
    if (!priceElement) return;
    
    const prices = {
        'Visiting Cards': '₹300 - ₹1,500',
        'Pamphlets & Flyers': '₹500 - ₹3,000',
        'Pamphlets': '₹500 - ₹3,000',
        'Stickers': '₹400 - ₹2,000',
        'Calendars': '₹800 - ₹5,000',
        'Lanyards': '₹600 - ₹3,500',
        'Printed Bags': '₹1,000 - ₹6,000',
        'Bags': '₹1,000 - ₹6,000'
    };
    
    priceElement.textContent = prices[serviceName] || '₹500 - ₹2,000';
    
    // Animate price change
    gsap.from(priceElement, {
        duration: 0.5,
        scale: 1.3,
        color: '#e91e63',
        ease: "elastic.out(1, 0.5)"
    });
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('orderModal');
    if (event.target === modal) {
        closeOrderModal();
    }
}

// ==========================================
// FORMS
// ==========================================

function initForms() {
    // Quote Form
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', handleQuoteSubmit);
    }

    // Order Form
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderSubmit);
        
        // Quantity input listener
        const quantityInput = orderForm.querySelector('input[name="quantity"]');
        if (quantityInput) {
            quantityInput.addEventListener('input', () => {
                const quantity = parseInt(quantityInput.value) || 100;
                updatePriceForQuantity(selectedServiceName, quantity);
            });
        }
    }
}

function handleQuoteSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    console.log('Quote Request:', data);
    
    // Animate submit button
    const submitBtn = e.target.querySelector('.submit-btn');
    if (submitBtn) {
        gsap.to(submitBtn, {
            duration: 0.3,
            scale: 0.95,
            yoyo: true,
            repeat: 1
        });
    }
    
    // Show success message
    showSuccessMessage('Your quote request has been submitted! We\'ll get back to you soon.');
    
    // Reset form
    e.target.reset();
}

function handleOrderSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.service = selectedServiceName;
    
    console.log('Order Data:', data);
    
    closeOrderModal();
    initiatePayment(data);
}

// ==========================================
// PAYMENT INTEGRATION (RAZORPAY)
// ==========================================

function initiatePayment(orderData) {
    const basePrice = 1000;
    const amount = basePrice * (orderData.quantity || 100);
    
    if (typeof Razorpay === 'undefined') {
        const confirmed = confirm(
            `Order Summary:\n\n` +
            `Service: ${orderData.service}\n` +
            `Name: ${orderData.customer_name}\n` +
            `Email: ${orderData.customer_email}\n` +
            `Phone: ${orderData.customer_phone}\n` +
            `Quantity: ${orderData.quantity}\n\n` +
            `Note: This is a demo. In production, you'll be redirected to Razorpay payment gateway.\n\n` +
            `Click OK to simulate successful payment.`
        );
        
        if (confirmed) {
            setTimeout(() => {
                showSuccessMessage(
                    'Demo: Payment simulated successfully! ' +
                    'In production, this will process real payments via Razorpay. ' +
                    'We\'ll contact you shortly to confirm your order.'
                );
            }, 500);
        }
        return;
    }
    
    const options = {
        key: 'rzp_test_1234567890',
        amount: amount,
        currency: 'INR',
        name: 'Rayan Graphics',
        description: `Order for ${orderData.service}`,
        image: '',
        prefill: {
            name: orderData.customer_name,
            email: orderData.customer_email,
            contact: orderData.customer_phone
        },
        theme: {
            color: '#e91e63'
        },
        handler: function(response) {
            handlePaymentSuccess(response, orderData);
        },
        modal: {
            ondismiss: function() {
                console.log('Payment cancelled');
            }
        }
    };
    
    const razorpay = new Razorpay(options);
    razorpay.open();
    
    razorpay.on('payment.failed', function(response) {
        handlePaymentFailure(response);
    });
}

function handlePaymentSuccess(paymentResponse, orderData) {
    console.log('Payment Success:', paymentResponse);
    console.log('Order Data:', orderData);
    showSuccessMessage('Payment successful! Your order has been placed. We\'ll contact you shortly.');
}

function handlePaymentFailure(response) {
    console.error('Payment Failed:', response);
    alert('Payment failed! Please try again or contact us for assistance.');
}

// ==========================================
// SUCCESS MESSAGE
// ==========================================

function showSuccessMessage(message) {
    const successDiv = document.getElementById('successMessage');
    const successText = document.getElementById('successText');
    
    if (!successDiv || !successText) return;
    
    successText.textContent = message;
    successDiv.classList.add('show');
    
    gsap.from(successDiv, {
        duration: 0.5,
        scale: 0,
        rotation: 180,
        ease: 'back.out(1.7)'
    });
    
    setTimeout(() => {
        gsap.to(successDiv, {
            duration: 0.3,
            scale: 0,
            rotation: -180,
            ease: 'power2.in',
            onComplete: () => {
                successDiv.classList.remove('show');
            }
        });
    }, 4000);
}

// ==========================================
// QUANTITY-BASED PRICE UPDATE
// ==========================================

function updatePriceForQuantity(serviceName, quantity) {
    const priceElement = document.getElementById('estimatedPrice');
    if (!priceElement) return;
    
    const basePrices = {
        'Visiting Cards': { min: 3, max: 15 },
        'Pamphlets & Flyers': { min: 5, max: 30 },
        'Pamphlets': { min: 5, max: 30 },
        'Stickers': { min: 4, max: 20 },
        'Calendars': { min: 8, max: 50 },
        'Lanyards': { min: 6, max: 35 },
        'Printed Bags': { min: 10, max: 60 },
        'Bags': { min: 10, max: 60 }
    };
    
    const prices = basePrices[serviceName] || { min: 5, max: 20 };
    const minPrice = Math.round(prices.min * quantity);
    const maxPrice = Math.round(prices.max * quantity);
    
    priceElement.textContent = `₹${minPrice.toLocaleString()} - ₹${maxPrice.toLocaleString()}`;
    
    gsap.from(priceElement, {
        duration: 0.4,
        scale: 1.2,
        ease: "elastic.out(1, 0.5)"
    });
}

// ==========================================
// PERFORMANCE & ACCESSIBILITY
// ==========================================

const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
            
            gsap.from(img, {
                duration: 0.8,
                opacity: 0,
                scale: 1.1,
                ease: "power2.out"
            });
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('orderModal');
    if (modal && modal.style.display === 'block' && e.key === 'Escape') {
        closeOrderModal();
    }
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log(
    '%c🎨 Rayan Graphics - Enhanced with GSAP',
    'font-size: 20px; font-weight: bold; color: #e91e63;'
);
console.log(
    '%c✨ Scroll Triggers | Parallax | 3D Transforms | Magnetic Buttons',
    'font-size: 12px; color: #00bcd4;'
);