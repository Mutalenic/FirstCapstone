const hamburgerMenu = document.querySelector('.toggle-Menu')[0];
const sidebarMenu = document.querySelector('.aboutMenu')[0];

hamburgerMenu.addEventListener('click',() => {
    sidebarMenu.classlist.add('active');
});