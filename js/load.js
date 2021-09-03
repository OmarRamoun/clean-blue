const worksWrapper = document.querySelector('#works div');
const work = {
  id: 1,
  name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  image: {
    src: `./images/snapshoot/snapshoot_${this.id}.svg`,
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
  displayPopup() {
    const popup = document.querySelector('#modal');
    popup.classList.toggle('none');
  },
};
const works = [];

for (let i = 1; i <= 4; i += 1) {
  work.id = i;
  work.name = `Tonic ${i}`;
  work.image.src = `./images/snapshoot/snapshoot_${i}.svg`;
  works.push(work);

  const article = document.createElement('article');
  article.classList.add('card', 'flex', 'flex-column', 'bg');

  const img = document.createElement('img');
  img.setAttribute('src', work.image.src);
  img.setAttribute('alt', work.image.alt);
  article.appendChild(img);

  const div = document.createElement('div');
  div.classList.add('content', 'hero');
  article.appendChild(div);

  const title = document.createElement('h3');
  title.classList.add('black', 'bold', 'cap');
  title.textContent = work.name;
  div.appendChild(title);

  const ul1 = document.createElement('ul');
  ul1.classList.add('info', 'flex');
  div.appendChild(ul1);

  const li1 = document.createElement('li');
  const a1 = document.createElement('a');
  a1.classList.add('category', 'flex', 'cross-center', 'ellipse', 'line-height', 'highlight', 'upper');
  a1.textContent = work.info.author;
  li1.appendChild(a1);
  ul1.appendChild(li1);

  const li2 = document.createElement('li');
  const a2 = document.createElement('a');
  a2.classList.add('category', 'flex', 'cross-center', 'ellipse', 'line-height', 'gray', 'cap');
  a2.textContent = work.info.type;
  li2.appendChild(a2);
  ul1.appendChild(li2);

  const li3 = document.createElement('li');
  li3.classList.add('category', 'flex', 'cross-center', 'ellipse', 'line-height', 'gray', 'cap');
  ul1.appendChild(li3);

  const time = document.createElement('time');
  time.classList.add('category', 'flex', 'cross-center', 'line-height', 'gray');
  time.setAttribute('datetime', '2015-10-22');
  time.textContent = work.info.year;
  li3.appendChild(time);

  const p = document.createElement('p');
  p.textContent = work.description;
  div.appendChild(p);

  const ul2 = document.createElement('ul');
  ul2.classList.add('tags', 'flex');

  work.technologies.forEach((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.classList.add('line-height', 'round-borders');
    a.textContent = item;
    a.setAttribute('href', '#');
    li.appendChild(a);
    ul2.appendChild(li);
  });
  div.appendChild(ul2);

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('bg', 'round-borders', 'cap');
  button.textContent = 'see project';
  div.appendChild(button);

  worksWrapper.appendChild(article);
}
