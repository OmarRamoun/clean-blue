const button = document.querySelector('#menu-icon');

function displayMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('sm-view');
  const menuIcon = document.querySelector('#menu-icon');
  menuIcon.childNodes[0].classList.toggle('none');
  menuIcon.childNodes[1].classList.toggle('none');
}

button.addEventListener('click', displayMenu);

const outerDiv = document.querySelector('#works div');
let works = [];

for (let i = 1; i <= 4; i+= 1) {
  let work = {
    id: i,
    name: 'Tonic',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    image: {
      src: './images/snapshoot/snapshoot_1.svg',
      alt: 'Project image',
    },
    info: {
      author: 'RAMOUN',
      type: 'Back End Dev',
      year: '2015',
    },
    technologies: ['html', 'css', 'JavaScript', 'cpp'],
    linkLive: '#',
    linkSource: '#',
  };
  works.push(work);

  let article = document.createElement('article');
  article.classList.add('card', 'flex', 'flex-column', 'bg');
  
  let img = document.createElement('img');
  img.setAttribute('src', work.image.src);
  img.setAttribute('alt', work.image.alt);
  article.appendChild(img);

  let div = document.createElement('div');
  div.classList.add('content', 'hero');
  article.appendChild(div);

  let title = document.createElement('h3');
  title.classList.add('black','bold', 'cap');
  title.textContent = work.name;
  div.appendChild(title);

  let ul1 = document.createElement('ul');
  ul1.classList.add('info', 'flex');
  div.appendChild(ul1);

  let li1 = document.createElement('li');
  let a1 = document.createElement('a');
  a1.classList.add('category', 'flex', 'cross-center', 'ellipse', 'line-height', 'highlight', 'upper');
  a1.textContent = work.info.author;
  li1.appendChild(a1);
  ul1.appendChild(li1);

  let li2 = document.createElement('li');
  let a2 = document.createElement('a');
  a2.classList.add('category', 'flex', 'cross-center', 'ellipse', 'line-height', 'gray', 'cap');
  a2.textContent = work.info.type;
  li2.appendChild(a2)
  ul1.appendChild(li2);

  let li3 = document.createElement('li');
  li3.classList.add('category', 'flex', 'cross-center', 'ellipse', 'line-height', 'gray', 'cap');
  ul1.appendChild(li3);
  
  let time = document.createElement('time');
  time.classList.add('category', 'flex', 'cross-center', 'line-height', 'gray');
  time.setAttribute('datetime', '2015-10-22');
  time.textContent = work.info.year;
  li3.appendChild(time);

  let p = document.createElement('p');
  p.textContent = work.description;
  div.appendChild(p);

  let ul2 = document.createElement('ul');
  ul2.classList.add('tags', 'flex');

  work.technologies.forEach(item => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.classList.add('line-height', 'round-borders');
    a.textContent = item;
    a.setAttribute("href", '#');
    li.appendChild(a);
    ul2.appendChild(li);
  });
  div.appendChild(ul2);
  
  let button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('bg', 'round-borders', 'cap');
  button.textContent = 'see project';
  div.appendChild(button);

  outerDiv.appendChild(article);
}