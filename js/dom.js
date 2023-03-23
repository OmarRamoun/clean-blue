const navBtn = document.querySelector('#menu-icon');
const navItems = document.querySelectorAll('.nav-item');
const header = document.querySelector('.main-header');
header.style.backgroundColor = '#fff';

const switchActiveItem = (type, navItem) => {
  const activeItem = document.querySelector('.active');

  if (activeItem) {
    activeItem.classList.remove('active');
  }

  if (type === 'scroll') {
    navItem.classList.add('active');
    return;
  }

  navItem.target.classList.add('active');
};

const displayMenu = () => {
  if (window.innerWidth < 768) {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sm-view');
    const menuIcon = document.querySelector('#menu-icon');
    menuIcon.childNodes[0].classList.toggle('none');
    menuIcon.childNodes[1].classList.toggle('none');
  }

  navItems.forEach((item) => {
    item.addEventListener('click', switchActiveItem('click'));
  });
};

window.onscroll = () => {
  const homeNavItem = document.querySelector('#nav-home');
  const portfolioNavItem = document.querySelector('#nav-portfolio');
  const aboutNavItem = document.querySelector('#nav-about');
  const contactNavItem = document.querySelector('#nav-contact');

  const scroll = window.pageYOffset;
  if (scroll < 100) {
    header.style.backgroundColor = '#fff';
    header.style.boxShadow = 'none';

    switchActiveItem('scroll', homeNavItem);
  } else {
    header.style.backgroundColor = '#fff2';
    header.style.boxShadow = '1px 1px 10px 0px #0000000d';

    if (scroll > 400) {
      switchActiveItem('scroll', portfolioNavItem);
    }

    if (scroll > 2200) {
      switchActiveItem('scroll', aboutNavItem);
    }

    if (scroll > 2800) {
      switchActiveItem('scroll', contactNavItem);
    }
  }
};

navBtn.addEventListener('click', displayMenu);
