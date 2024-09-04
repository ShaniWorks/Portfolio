let menubar = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header');

menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};
