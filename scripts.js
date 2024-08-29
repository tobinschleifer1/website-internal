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
});
