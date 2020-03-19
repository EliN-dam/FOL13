const menu = document.querySelector('.menu'),
      nav = document.querySelector('nav')
      navLinks = nav.querySelectorAll('ul li');
let menuOpen = false;

menu.addEventListener('click', function() {
    if (menuOpen) {
        menu.classList.remove('open');
        nav.classList.remove('open');
        navLinks.forEach(link => {
            link.style.animation = "";
        });
        menuOpen = false
    } else {
        menu.classList.add('open');
        nav.classList.add('open');
        navLinks.forEach((link, index) => {
            link.style.animation = `showLinkUp .5s ease ${index / 3 + .5}s forwards`;
        });
        menuOpen = true;
    }
});