let menu = document.querySelector('menu-icon');
navbar.classlist.toggle('active');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}