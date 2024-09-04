document.addEventListener("DOMContentLoaded", function () {
    // Text Typing Animation
    const text = "I'm Zeeshan Haider Senior E-Commerce Officer";
    const typingSpeed = 100; // Speed in milliseconds

    let index = 0;

    function typeText() {
        if (index < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        }
    }

    typeText();

    // Responsive Navbar Toggle
    let menu = document.querySelector('#menu');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }

    // Scroll Behavior for Links
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
        });
    });
});
