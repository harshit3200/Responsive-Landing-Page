document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const form = document.querySelector('form');
    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const messageTextarea = form.querySelector('textarea');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Name validation
        if (nameInput.value.trim() === '') {
            isValid = false;
            alert('Please enter your name.');
        }

        // Email validation
        if (!emailInput.value.match(/^[^@]+@[^@]+\.[^@]+$/)) {
            isValid = false;
            alert('Please enter a valid email address.');
        }

        // Message validation
        if (messageTextarea.value.trim() === '') {
            isValid = false;
            alert('Please enter your message.');
        }

        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    // Mobile navigation toggle
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');
    const toggleButton = document.createElement('button');
    toggleButton.classList.add('nav-toggle');
    toggleButton.innerText = 'Menu';
    navContainer.insertBefore(toggleButton, navLinks);

    toggleButton.addEventListener('click', function() {
        navLinks.classList.toggle('nav-open');
    });
});
