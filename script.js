document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navigation Scrolled State
    const nav = document.querySelector('.main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Waterfall/Stagger Reveals
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: stop observing once revealed
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const staggerChildren = document.querySelectorAll('.stagger-child');
    staggerChildren.forEach(child => {
        observer.observe(child);
    });

    // 3. Magnetic Micro-Physics for Buttons
    const magneticElements = document.querySelectorAll('.magnetic-btn');

    magneticElements.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element.
            const y = e.clientY - rect.top;  // y position within the element.

            // Calculate movement (limit to a max offset of e.g. 10px)
            const moveX = (x - rect.width / 2) * 0.2;
            const moveY = (y - rect.height / 2) * 0.2;

            btn.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
        });

        btn.addEventListener('mouseleave', () => {
            // Spring back
            btn.style.transform = `translate(0px, 0px) scale(1)`;
        });
    });

    // 4. Parallax Image Effect (DOM cost optimized via requestAnimationFrame)
    const parallaxImages = document.querySelectorAll('.parallax-img');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                parallaxImages.forEach(img => {
                    const parent = img.closest('.image-wrapper, .card-image');
                    if(parent) {
                        const rect = parent.getBoundingClientRect();
                        // Only animate if in viewport
                        if (rect.top < window.innerHeight && rect.bottom > 0) {
                            const offset = (rect.top - window.innerHeight / 2) * 0.1;
                            img.style.transform = `translateY(${offset}px)`;
                        }
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    });

    // 5. Contextual UI / Focus Mode buttons
    const toolBtns = document.querySelectorAll('.tool-btn');
    toolBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toolBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // New sections use .stagger-child and .parallax-img, which are already handled by the code above.

    // ==========================================================
    // GSAP & ADVANCED ANIMATIONS
    // ==========================================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Text Mask Reveal Effect (A Torra)
        gsap.to('.mask-reveal-content', {
            clipPath: 'circle(150% at 50% 50%)', // Expand to fully cover
            ease: 'none',
            scrollTrigger: {
                trigger: '.mask-section',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1, // Smooth scrubbing
            }
        });
    }

});
