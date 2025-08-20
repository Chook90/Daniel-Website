// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
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
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Show success message (in production, this would send to a server)
            showMessage('Thank you for reaching out, ' + formData.name + '. Your message has been received. I will be in touch within 48 hours. 🙏', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Log form data (in production, this would be sent to a server)
            console.log('Form submission:', formData);
        });
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.style.display = 'block';
        
        if (type === 'success') {
            formMessage.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
            formMessage.style.color = '#d4af37';
            formMessage.style.border = '1px solid #d4af37';
        } else {
            formMessage.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
            formMessage.style.color = '#ff6b6b';
            formMessage.style.border = '1px solid #ff6b6b';
        }
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }

    // Add smooth scroll behavior for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe content cards
    const contentCards = document.querySelectorAll('.content-card');
    contentCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observe service items
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
});

// Add some mystical particle effects to the hero section
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        // Create floating particles
        for (let i = 0; i < 20; i++) {
            createParticle(heroSection);
        }
    }
    
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.backgroundColor = '#d4af37';
        particle.style.borderRadius = '50%';
        particle.style.opacity = '0';
        particle.style.pointerEvents = 'none';
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        container.appendChild(particle);
        
        // Animate particle
        animateParticle(particle);
    }
    
    function animateParticle(particle) {
        const duration = 5000 + Math.random() * 5000;
        const startTime = Date.now();
        
        function animate() {
            const elapsed = Date.now() - startTime;
            const progress = elapsed / duration;
            
            if (progress < 1) {
                // Fade in and out
                if (progress < 0.5) {
                    particle.style.opacity = progress * 2 * 0.5;
                } else {
                    particle.style.opacity = (1 - progress) * 2 * 0.5;
                }
                
                // Gentle floating motion
                const floatY = Math.sin(progress * Math.PI * 2) * 20;
                particle.style.transform = `translateY(${floatY}px)`;
                
                requestAnimationFrame(animate);
            } else {
                // Reset and start again
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                animateParticle(particle);
            }
        }
        
        animate();
    }
});
