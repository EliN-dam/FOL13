const menu = document.querySelector('.menu'),
      nav = document.querySelector('nav');
let menuOpen = false;

menu.addEventListener('click', function() {
    if (menuOpen) {
        menu.classList.remove('open');
        nav.classList.remove('open');
        menuOpen = false
    } else {
        menu.classList.add('open');
        nav.classList.add('open');
        menuOpen = true;
    }
});