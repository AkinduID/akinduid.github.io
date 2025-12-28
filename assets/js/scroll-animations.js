/**
 * Scroll-triggered animations for modern portfolio
 * Implements Intersection Observer API for performance
 */

(function() {
    'use strict';
    
    // Check if reduced motion is preferred
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        console.log('Animations disabled: user prefers reduced motion');
        return;
    }
    
    // Animation configuration
    const config = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class with stagger delay
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, delay);
                
                // Optionally unobserve after animation
                if (!entry.target.classList.contains('animate-repeat')) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, config);
    
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', () => {
        // Note: Scroll animations disabled for article sections
        // The template uses its own show/hide system via main.js
        // Only apply animations to elements within visible articles
        
        // Observe project cards (when article is visible)
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.classList.add('fade-in-up');
            card.dataset.delay = (index % 3) * 100; // Stagger by row
            observer.observe(card);
        });
        
        // Observe skill categories (when article is visible)
        const skillCategories = document.querySelectorAll('.skills-category');
        skillCategories.forEach((category, index) => {
            category.classList.add('fade-in-up');
            category.dataset.delay = index * 80;
            observer.observe(category);
        });
        
        // Observe achievement cards (when article is visible)
        const achievementCards = document.querySelectorAll('.achievement-item, .certification-item');
        achievementCards.forEach((card, index) => {
            card.classList.add('fade-in-up');
            card.dataset.delay = (index % 2) * 100;
            observer.observe(card);
        });
        
        // Observe connect cards (when article is visible)
        const connectCards = document.querySelectorAll('.connect-card');
        connectCards.forEach((card, index) => {
            card.classList.add('fade-in-up');
            card.dataset.delay = (index % 3) * 80;
            observer.observe(card);
        });
        
        console.log('Scroll animations initialized (within articles only)');
    });
    
    // Note: Smooth scroll disabled - the template uses its own navigation system
    // The main.js handles article show/hide with custom animations
    
    // Add scroll progress indicator
    function updateScrollProgress() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        
        let progressBar = document.getElementById('scroll-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.id = 'scroll-progress';
            progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                height: 3px;
                background: linear-gradient(90deg, #4fc3f7, #00bcd4);
                z-index: 9999;
                transition: width 0.1s ease;
                box-shadow: 0 0 10px rgba(79, 195, 247, 0.5);
            `;
            document.body.appendChild(progressBar);
        }
        
        progressBar.style.width = `${progress}%`;
    }
    
    // Throttle scroll events for performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateScrollProgress();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Initialize progress bar
    updateScrollProgress();
    
    // Parallax effect for header logo (subtle)
    window.addEventListener('scroll', () => {
        const logo = document.querySelector('header .logo');
        if (logo && window.scrollY < 500) {
            const scrolled = window.scrollY;
            logo.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
    
    // Add loading animation for images
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        if (!img.complete) {
            img.classList.add('loading-shimmer');
            img.addEventListener('load', () => {
                img.classList.remove('loading-shimmer');
            });
        }
    });
    
})();

// Back to top button functionality
(function() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})();
