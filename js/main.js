// Premium Custom Cursor
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.innerHTML = '<div class="cursor-inner"></div>';
    document.body.appendChild(cursor);
    
    const cursorInner = cursor.querySelector('.cursor-inner');
    
    // Style the custom cursor
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 1px solid #d4af37;
        border-radius: 50%;
        pointer-events: none;
        transition: all 0.1s ease;
        z-index: 10000;
        mix-blend-mode: difference;
    `;
    
    cursorInner.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 4px;
        height: 4px;
        background: #d4af37;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.15s ease;
    `;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .symbol-circle');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = '#d4af37';
            cursorInner.style.transform = 'translate(-50%, -50%) scale(2)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorInner.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
});

// Parallax Scrolling Effect
document.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-section, .spiritual-symbols');
    
    parallaxElements.forEach(el => {
        const speed = el.dataset.speed || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Scroll Progress Bar
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.width = '0%';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / (documentHeight - windowHeight)) * 100;
        progressBar.style.width = progress + '%';
    });
});

// Enhanced Contact Form with Premium Animations
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading animation
            const submitBtn = contactForm.querySelector('.form-submit');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span class="loading-spinner"></span>';
            submitBtn.disabled = true;
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                purpose: document.getElementById('purpose').value,
                message: document.getElementById('message').value
            };

            // Validate form
            if (!formData.name || !formData.email || !formData.purpose) {
                showMessage('Please fill in all required fields.', 'error');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showMessage('Please enter a valid email address.', 'error');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                return;
            }

            // Simulate form submission
            setTimeout(() => {
                showMessage('Thank you for reaching out, ' + formData.name + '. Your message has been received. I will be in touch within 48 hours. 🙏', 'success');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Add celebration animation
                createCelebrationParticles();
            }, 1500);
        });
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.style.display = 'block';
        formMessage.style.opacity = '0';
        formMessage.style.transform = 'translateY(20px)';
        
        if (type === 'success') {
            formMessage.style.background = 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(183, 110, 121, 0.1) 100%)';
            formMessage.style.color = '#d4af37';
            formMessage.style.border = '1px solid #d4af37';
        } else {
            formMessage.style.background = 'rgba(255, 0, 0, 0.1)';
            formMessage.style.color = '#ff6b6b';
            formMessage.style.border = '1px solid #ff6b6b';
        }
        
        // Animate in
        setTimeout(() => {
            formMessage.style.transition = 'all 0.3s ease';
            formMessage.style.opacity = '1';
            formMessage.style.transform = 'translateY(0)';
        }, 10);
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.opacity = '0';
            formMessage.style.transform = 'translateY(20px)';
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 300);
        }, 5000);
    }

    function createCelebrationParticles() {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: linear-gradient(135deg, #d4af37, #b76e79);
                border-radius: 50%;
                pointer-events: none;
                z-index: 10000;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            `;
            document.body.appendChild(particle);
            
            const angle = (Math.PI * 2 * i) / 30;
            const velocity = 5 + Math.random() * 5;
            const lifetime = 1000 + Math.random() * 1000;
            
            let opacity = 1;
            let x = 0;
            let y = 0;
            
            const animate = () => {
                x += Math.cos(angle) * velocity;
                y += Math.sin(angle) * velocity;
                opacity -= 1 / (lifetime / 16);
                
                particle.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
                particle.style.opacity = opacity;
                
                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    particle.remove();
                }
            };
            
            requestAnimationFrame(animate);
        }
    }
});

// Premium Entrance Animations with Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.service-item, .interest-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0) scale(1)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all content sections
    const sections = document.querySelectorAll('.content-card, .intro-section, .services-grid, .pricing-info');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(section);
    });
});

// Add CSS for animate-in class
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .loading-spinner {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(10, 9, 8, 0.3);
        border-top-color: #0a0908;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Smooth Page Transitions
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="./"], a[href^="/"], a[href$=".html"]');
    const transitionEl = document.createElement('div');
    transitionEl.className = 'page-transition';
    document.body.appendChild(transitionEl);
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && !href.startsWith('#') && !href.startsWith('mailto:')) {
                e.preventDefault();
                transitionEl.classList.add('active');
                
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
});

// Mystical Floating Orbs Background
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        // Create container for orbs
        const orbContainer = document.createElement('div');
        orbContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
        `;
        heroSection.appendChild(orbContainer);
        
        // Create floating orbs
        for (let i = 0; i < 5; i++) {
            createFloatingOrb(orbContainer, i);
        }
    }
    
    function createFloatingOrb(container, index) {
        const orb = document.createElement('div');
        const size = 100 + Math.random() * 200;
        const startX = Math.random() * 100;
        const duration = 15 + Math.random() * 20;
        
        orb.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
            border-radius: 50%;
            left: ${startX}%;
            top: 100%;
            animation: floatUp ${duration}s linear infinite;
            animation-delay: ${index * 3}s;
            filter: blur(2px);
        `;
        
        container.appendChild(orb);
        
        // Define floating animation
        if (!document.querySelector('#floatUpKeyframes')) {
            const keyframes = document.createElement('style');
            keyframes.id = 'floatUpKeyframes';
            keyframes.textContent = `
                @keyframes floatUp {
                    0% {
                        transform: translateY(0) translateX(0) scale(1);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.5;
                    }
                    50% {
                        transform: translateY(-50vh) translateX(30px) scale(1.1);
                    }
                    90% {
                        opacity: 0.5;
                    }
                    100% {
                        transform: translateY(-110vh) translateX(-30px) scale(0.9);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(keyframes);
        }
    }
});

// Sacred Geometry Animation Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const symbols = document.querySelectorAll('.symbol-circle svg');
    
    symbols.forEach((symbol, index) => {
        symbol.addEventListener('mouseenter', function() {
            this.style.animationDuration = '2s';
        });
        
        symbol.addEventListener('mouseleave', function() {
            this.style.animationDuration = '20s';
        });
    });
});

// Add subtle sound effects (optional - requires sound files)
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button, .btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add subtle click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
});
