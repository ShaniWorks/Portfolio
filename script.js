let menubar = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Typing effect for the text "I'm Zeeshan Haider, Senior E-Commerce Officer"
document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.querySelector('.text-animation h2');
    typingText.classList.add('typing-animation');
});

// Header visibility based on scroll direction
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        document.body.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScroll && !document.body.classList.contains('scroll-down')) {
        document.body.classList.remove('scroll-up');
        document.body.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && document.body.classList.contains('scroll-down')) {
        document.body.classList.remove('scroll-down');
        document.body.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});
