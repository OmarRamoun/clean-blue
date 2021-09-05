const navBtn = document.querySelector('#menu-icon');

// eslint-disable-next-line linebreak-style
const toggleNavMenu = () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('sm-view');
  const menuIcon = document.querySelector('#menu-icon');
  menuIcon.childNodes[0].classList.toggle('none');
  menuIcon.childNodes[1].classList.toggle('none');
};

navBtn.addEventListener('click', toggleNavMenu);
