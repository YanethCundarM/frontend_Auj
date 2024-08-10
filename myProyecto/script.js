document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navList = document.querySelector('.nav-list');
    const socialIcons = document.querySelector('.social-icons');

    menuIcon.addEventListener('click', function() {
        navList.classList.toggle('show');
        socialIcons.classList.toggle('show');
    });
});
