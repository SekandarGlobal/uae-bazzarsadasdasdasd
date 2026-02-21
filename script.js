/* ========================================
   MODERN PORTFOLIO - SUPER ANIMATIONS
   ======================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all animations and features
    initLoadingScreen();
    initCustomCursor();
    initNavigation();
    initScrollAnimations();
    initParallaxEffects();
    initSkillAnimations();
    initProjectCards();
    initContactForm();
    initTextReveal();
    initMouseFollower();
});

/* ========================================
   LOADING SCREEN
   ======================================== */
function initLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-text">SEKANDAR.SAMADI</div>
        <div class="loading-bar"></div>
    `;
    document.body.appendChild(loadingScreen);

    // Hide loading screen after animation
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.remove();
            // Trigger initial animations
            document.body.classList.add('loaded');
        }, 500);
    }, 2000);
}

/* ========================================
   CUSTOM CURSOR
   ======================================== */
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor follow
    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.15;
        cursorY += dy * 0.15;
        
        cursor.style.left = cursorX - 10 + 'px';
        cursor.style.top = cursorY - 10 + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Add hover effect to interactive elements
    const hoverSelectors = ['a', 'button', '.project-card', '.skill-item', '.stat-item', 'input', 'textarea'];
    
    hoverSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });
    });
}

/* ========================================
   NAVIGATION
   ======================================== */
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll direction
        if (currentScroll > lastScroll && currentScroll > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

/* ========================================
   SCROLL ANIMATIONS
   ======================================== */
function initScrollAnimations() {
    // Create reveal elements
    const createRevealElements = () => {
        const elements = document.querySelectorAll('.about-text, .about-stats, .experience-item, .project-card, .skill-category, .contact-info, .contact-form');
        
        elements.forEach((el, index) => {
            el.classList.add('reveal');
            if (index % 2 === 0) {
                el.classList.add('reveal-left');
            } else {
                el.classList.add('reveal-right');
            }
        });
    };

    createRevealElements();

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

/* ========================================
   PARALLAX EFFECTS
   ======================================== */
function initParallaxEffects() {
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.profile-img');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const limit = hero.offsetHeight;
            
            if (scrolled < limit) {
                // Parallax for hero content
                const heroContent = hero.querySelector('.hero-content');
                if (heroContent) {
                    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                    heroContent.style.opacity = 1 - (scrolled / 700);
                }
                
                // Reverse parallax for hero image
                if (heroImage) {
                    heroImage.style.transform = `translateY(${scrolled * -0.1}px) rotate(${scrolled * 0.02}deg)`;
                }
            }
        });
    }

    // Section parallax
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (!section.classList.contains('hero')) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + sectionHeight) {
                    const speed = 0.05;
                    section.style.backgroundPositionY = (scrolled - sectionTop) * speed + 'px';
                }
            });
        }
    });
}

/* ========================================
   SKILL ANIMATIONS
   ======================================== */
function initSkillAnimations() {
    const skillItems = document.querySelectorAll('.skill-item');
    const skillCategories = document.querySelectorAll('.skill-category');

    // Animate skill categories
    skillCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            category.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            category.style.opacity = '1';
            category.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Animate individual skill items
    skillItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.4s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 300 + (index * 50));
    });
}

/* ========================================
   PROJECT CARDS
   ======================================== */
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });

    // Add tilt effect
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

/* ========================================
   CONTACT FORM - Formspree Integration
   ======================================== */
function initContactForm() {
    // Form submits directly to Formspree via HTML action
    // No additional JavaScript needed
}

/* ========================================
   TEXT REVEAL ANIMATION
   ======================================== */
function initTextReveal() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    
    if (heroTitle) {
        // Split title into words
        const titleText = heroTitle.innerHTML;
        heroTitle.innerHTML = `<span class="reveal-text">${titleText}</span>`;
        
        setTimeout(() => {
            heroTitle.querySelector('span').classList.add('revealed');
        }, 500);
    }

    // Animate subtitle
    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroSubtitle.style.transition = 'all 0.8s ease';
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 1200);
    }

    // Animate description
    if (heroDescription) {
        heroDescription.style.opacity = '0';
        heroDescription.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroDescription.style.transition = 'all 0.8s ease';
            heroDescription.style.opacity = '1';
            heroDescription.style.transform = 'translateY(0)';
        }, 1500);
    }

    // Animate buttons
    const buttons = document.querySelector('.hero-buttons');
    if (buttons) {
        const btns = buttons.querySelectorAll('.btn');
        btns.forEach((btn, index) => {
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                btn.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }, 1800 + (index * 200));
        });
    }
}

/* ========================================
   MOUSE FOLLOWER EFFECT
   ======================================== */
function initMouseFollower() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Create floating particles
    const createParticles = () => {
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${Math.random() * 10 + 10}s linear infinite;
                animation-delay: -${Math.random() * 10}s;
            `;
            hero.appendChild(particle);
        }
    };

    createParticles();
}

// Add floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/* ========================================
   NOTIFICATION SYSTEM
   ======================================== */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => notification.classList.add('show'), 10);

    // Remove after delay
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

/* ========================================
   STATS COUNTER ANIMATION
   ======================================== */
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        const suffix = stat.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const increment = target / 50;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target + suffix;
            }
        };
        
        // Start animation when visible
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.unobserve(stat);
            }
        });
        
        observer.observe(stat);
    });
}

// Initialize stats counter
initStatsCounter();

/* ========================================
   SCROLL PROGRESS BAR
   ======================================== */
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: var(--pure-black);
        z-index: 100001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

initScrollProgress();

/* ========================================
   KEYBOARD NAVIGATION
   ======================================== */
document.addEventListener('keydown', (e) => {
    // ESC to close mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

/* ========================================
   PERFORMANCE OPTIMIZATION
   ======================================== */
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

// Debounce scroll events
const debouncedScroll = debounce(() => {
    // Scroll-based animations go here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Lazy load images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

/* ========================================
   CONSOLE WELCOME
   ======================================== */
console.log(`
╔═══════════════════════════════════════════╗
║                                           ║
║     ██████╗ ███████╗██╗   ██╗            ║
║     ██╔══██╗██╔════╝██║   ██║            ║
║     ██║  ██║█████╗  ██║   ██║            ║
║     ██║  ██║██╔══╝  ╚██╗ ██╔╝            ║
║     ██████╔╝███████╗ ╚████╔╝             ║
║     ╚═════╝ ╚══════╝  ╚═══╝              ║
║                                           ║
║   ██████╗ ███████╗ █████╗ ██████╗       ║
║   ██╔══██╗██╔════╝██╔══██╗██╔══██╗      ║
║   ██║  ██║█████╗  ███████║██║  ██║      ║
║   ██║  ██║██╔══╝  ██╔══██║██║  ██║      ║
║   ██████╔╝███████╗██║  ██║██████╔╝      ║
║   ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═════╝       ║
║                                           ║
║   Welcome to Sekandar Samadi's Portfolio  ║
║   Built with ❤️ using HTML, CSS & JS       ║
║                                           ║
╚═══════════════════════════════════════════╝
`);
