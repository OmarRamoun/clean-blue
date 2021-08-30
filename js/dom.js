const button = document.querySelector('#menu-icon');

function displayMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('sm-view');
  console.log("click works");
  const image = document.querySelector('svg');
  // if (image.getAttribute(src) === "")
}

console.log("js works");
button.addEventListener('click', displayMenu);