let menubar = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Animation for text "I'm Zeeshan Haider, Senior E-Commerce Officer"
const animatedText = document.querySelector('.text-animation h2');
const text = "I'm Zeeshan Haider, Senior E-Commerce Officer";
let index = 0;

function animateText() {
    if (index < text.length) {
        animatedText.textContent += text.charAt(index);
        index++;
        setTimeout(animateText, 100);
    } else {
        setTimeout(() => {
            animatedText.textContent = '';
            index = 0;
            animateText();
        }, 3000);
    }
}

window.onload = animateText;
