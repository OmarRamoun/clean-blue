const button = document.querySelector('#menu-icon');

function displayMenu() {
  if (window.innerWidth < 768) {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sm-view');
    const menuIcon = document.querySelector('#menu-icon');
    menuIcon.childNodes[0].classList.toggle('none');
    menuIcon.childNodes[1].classList.toggle('none');
  }
}

button.addEventListener('click', displayMenu);
