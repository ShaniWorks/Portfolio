document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.querySelector('.text-animation h2 span');
    const textToType = "I'm Zeeshan Haider, Senior E-Commerce Officer";
    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            textElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust typing speed here (100ms per character)
        }
    }

    typeText();
});
