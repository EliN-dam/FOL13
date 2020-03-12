var reportar = document.getElementById('report'),
    cerrar = document.getElementById('cerrar')
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    campos = document.getElementById('campos')
    titulo = document.getElementById('titulo'),
    desplegable = document.getElementById('seccion');

/*var test = window.location.pathname.split('/').pop().split('.')[0];
console.log(test);*/

report.addEventListener('click', function() {
    overlay.classList.add('active');
    popup.classList.add('active');
    titulo.classList.add('slideUp', 'r05');
    campos.classList.add('fadeIn', 's1', 'r06');
    desplegable.value = window.location.pathname.split('/').pop().split('.')[0];
});

cerrar.addEventListener('click', function() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
    titulo.classList.remove('slideUp', 'r05');
    campos.classList.remove('fadeIn', 's1', 'r06');
});