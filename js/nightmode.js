const nightMode = document.getElementById('night-mode'),
      bgLayer = document.getElementById('bg-layer');

nightMode.addEventListener('click', function() {
    nightMode.classList.toggle('active');
    bgLayer.classList.toggle('active');
})
