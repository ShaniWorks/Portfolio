let menubar = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Header hide on scroll
let prevScrollPos = window.pageYOffset;
const header = document.querySelector('.header');

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        header.classList.remove('hidden');
    } else {
        header.classList.add('hidden');
    }
    prevScrollPos = currentScrollPos;
};

