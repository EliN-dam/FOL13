const slides = document.querySelectorAll('.slide'),
      next = document.querySelector('#next'),
      prev = document.querySelector('#prev');

var auto = true,
    intervalTime = 5000;
let slideInterval;

function nextSlide() {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    // Comprobar el siguiente elemento del slide.
    if (current.nextElementSibling)
        current.nextElementSibling.classList.add('current');
    else {
        // Si no hay elemento siguiente... saltar al primero.
        slides[0].classList.add('current');
    }
}

function prevSlide() {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling)
        current.previousElementSibling.classList.add('current');
    else {
        slides[slides.length - 1].classList.add('current');
    }
}

next.addEventListener('click', function() {
    nextSlide();
    autoslide();
});

prev.addEventListener('click', function() {
    prevSlide();
    autoslide();
});

function autoslide() {
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
}

autoslide();