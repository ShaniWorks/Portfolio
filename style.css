@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500&display=swap');

* {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    outline: none;
    border: none;
    color: #fff;
}

html {
    font-size: 62.5%;
    overflow-x: hidden;
}

body {
    background: #000;
    color: #fff;
    height: 100vh;
}

.header {
    position: fixed;
    left: 0;
    top: 0;
    padding: 2rem 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    transition: top 0.3s ease;
}

#menu {
    font-size: 3rem;
    display: none;
}

.logo {
    font-size: 2.9rem;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}

.navbar a {
    display: inline-block;
    font-size: 1.7rem;
    color: #fff;
    text-decoration: none;
    margin: 0 2.5rem;
    letter-spacing: .02rem;
    transition: .5s ease;
}

.navbar a:hover {
    color: #00f;
}

.home {
    padding: 10rem 9% 2rem;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.text-content {
    max-width: 70rem;
}

.text-content h1 {
    font-size: 5rem;
    text-transform: capitalize;
    color: #fff;
    font-weight: 600;
    letter-spacing: .05rem;
}

.text-animation h2 {
    font-size: 3.2rem;
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: .7px #00f;
    background: linear-gradient(#00f, #00f);
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-position: -33rem 0;
    animation: TextSlide 6s linear infinite;
}

@keyframes TextSlide {
    0%, 10%, 100% {
        background-position: -33rem 0;
    }
    65%, 85% {
        background-position: 0 0;
    }
}

.btn-section {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    width: 32.5rem;
}

.btn {
    height: 5rem;
    width: 15rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #00f;
    border-radius: .8rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
}

.btn:hover {
    transform: scale(1.1);
}

.skills-section, .about-me-section, .education-section {
    padding: 5rem 9%;
    background: #000;
}

.skills-section h2, .about-me-section h2, .education-section h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
}

.skill-item {
    background: #00f;
    padding: 1rem 2rem;
    margin: 1rem 0;
    border-radius: 0.5rem;
    transition: transform 0.3s ease-in-out;
}

.skill-item:hover {
    transform: scale(1.05);
}

/* RESPONSIVE */

@media(max-width:991px) {
    .header {
        padding: 2rem 3%;
    }
    section {
        padding: 10rem 3% 2rem;
    }
}

@media(max-width:768px) {
    #menu {
        display: block;
    }
    .navbar {
        position: absolute;
        left: 0;
        top: 100%;
        width: 0;
        padding: 1rem 3%;
        background: #000;
        border-top: 1px solid #00f;
        opacity: 0;
        transition: .5s ease;
    }
    .navbar.active {
        width: 100%;
        opacity: 1;
    }
    .navbar a {
        display: none;
    }
    .navbar.active a {
        display: block;
        font-size: 2rem;
        margin: 3rem 0;
    }
    .home {
        flex-direction: column-reverse;
        text-align: center;
    }
    .text-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .text-content h1 {
        font-size: 4rem;
    }
    .home img {
        width: 35vw;
        margin-top: 3rem;
    }
}

@media(max-width:450px) {
    html {
        font-size: 50%;
    }
}
