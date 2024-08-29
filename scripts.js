document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerNav = document.querySelector('.burger-nav');

    burgerMenu.addEventListener('click', function () {
        burgerNav.classList.toggle('open');
    });

    document.addEventListener('click', function (event) {
        if (!burgerMenu.contains(event.target) && !burgerNav.contains(event.target)) {
            burgerNav.classList.remove('open');
        }
    });

    // Map Interaction Script
    const mapPoints = document.querySelectorAll('.map-point');
    const infoBox = document.getElementById('info-box');
    const infoText = document.getElementById('info-text');

    mapPoints.forEach(point => {
        point.addEventListener('click', function () {
            const info = point.getAttribute('data-info');
            infoText.textContent = info;
            infoBox.style.display = 'block';
            infoBox.style.top = point.offsetTop + 'px';
            infoBox.style.left = point.offsetLeft + 'px';
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.classList.contains('map-point')) {
            infoBox.style.display = 'none';
        }
    });
});
