const nightMode = document.getElementById('night-mode'),
      bgLayer = document.getElementById('bg-layer');

nightMode.addEventListener('click', function() {
    nightMode.classList.toggle('active');
    document.body.classList.toggle('night');

    //Guardar el estado en localstorage
    if (document.body.classList.contains('night'))
        localStorage.setItem('night-mode', 'true');
    else
        localStorage.setItem('night-mode', 'false');
})

if (localStorage.getItem('night-mode') == 'true') {
    nightMode.classList.add('active');
    document.body.classList.add('night');
} else {
    nightMode.classList.remove('active');
    document.body.classList.remove('night');
}

window.onload = function() {
    // Sólo aplica la transición cuando la página esta cargada.
    document.body.classList.add('transitions-night-mode-on');
}