// Initialize Particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00ff9d'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00ff9d',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// Smooth scroll function
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Center circle click handler
document.getElementById('centerCircle').addEventListener('click', () => {
    smoothScroll('#about', 1000);
});

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate about section content
gsap.from('.about-content', {
    scrollTrigger: {
        trigger: '.about-content',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 1
});

// Animate project cards
gsap.utils.toArray('.project-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8
    });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
});

// Responsive orbit positioning
function updateOrbitPositions() {
    const orbitIcons = document.querySelectorAll('.orbit-icon');
    const radius = window.innerWidth > 768 ? 200 : window.innerWidth > 480 ? 150 : 120;
    
    orbitIcons.forEach((icon, index) => {
        const angle = (index * 2 * Math.PI) / orbitIcons.length;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        icon.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Update orbit positions on load and resize
window.addEventListener('load', updateOrbitPositions);
window.addEventListener('resize', updateOrbitPositions);

// Add parallax effect to sections
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const speed = 0.5;
        const yPos = -(window.pageYOffset * speed);
        section.style.backgroundPositionY = yPos + 'px';
    });
}); 