// Header Hide on Scroll
let prevScrollPos = window.pageYOffset;
const header = document.querySelector('.header');

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        header.classList.remove('hidden');
    } else {
        header.classList.add('hidden');
    }
    prevScrollPos = currentScrollPos;
};

// Mobile Menu Toggle
const menuIcon = document.getElementById('menu');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

// Text Typing Animation
const textAnimation = document.querySelector('.text-animation h2');
const textContent = "I'm Zeeshan Haider Senior E-Commerce Officer";
let i = 0;

function typeWriter() {
    if (i < textContent.length) {
        textAnimation.textContent += textContent.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Adjust typing speed by changing the delay time
    }
}

window.onload = () => {
    typeWriter(); // Start the typing animation on page load
};
