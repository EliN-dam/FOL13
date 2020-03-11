const nightMode = document.getElementById('night-mode'),
      bgLayer = document.getElementById('bg-layer');

nightMode.addEventListener('click', function() {
    nightMode.classList.toggle('active');
    bgLayer.classList.toggle('night');

    //Guardar el estado en localstorage
    if (bgLayer.classList.contains('night'))
        localStorage.setItem('night-mode', 'true');
    else
        localStorage.setItem('night-mode', 'false');
})

if (localStorage.getItem('night-mode') == 'true') {
    nightMode.classList.toggle('active');
    bgLayer.classList.toggle('night');
} else {
    nightMode.classList.remove('active');
    bgLayer.classList.remove('night');
}

window.onload = function() {
    // Sólo aplica la transición cuando la página esta cargada.
    document.body.classList.add('transitions-night-mode-on');
}