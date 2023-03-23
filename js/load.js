const worksWrapper = document.querySelector('#works .wrapper');

const works = [
  {
    id: 1,
    name: 'Wonka Converence',
    description: 'Wonka Converence is the world conference for family doctors.',
    fullDescription: 'Wonka Converence 2021 Made with Vanilla HTML5, CSS3, & JS. The Website Contains A Homepage With Information About The Main Program Of The Conference Speakers And Partners And An About Page With Information About The Conference.election of privately personalized reads; no accounts or sign-ups required.',
    LongDescription: 'Wonka Converence 2021 Made with Vanilla HTML5, CSS3, & JS. The Website Contains A Homepage With Information About The Main Program Of The Conference Speakers And Partners And An About Page With Information About The Conference.election of privately personalized reads; no accounts or sign-ups required.',
    image: {
      src: `./images/snapshoot/snapshoot_${this.id}.png`,
      alt: 'Project image',
    },
    info: {
      author: 'RAMOUN',
      type: 'Front End Dev',
      year: '2021',
    },
    technologies: ['html5', 'css3', 'ES6'],
    buttons: {
      live: {
        text: 'see live',
        link: 'https://wonka.omarramoun.com/',
        imgSrc: './images/arrow.svg',
      },
      source: {
        text: 'see source',
        link: 'https://github.com/omarramoun/Wonka-Conference',
        imgSrc: './images/social/github.svg',
      },
    },
  },
  {
    id: 2,
    name: 'Awesome Books',
    description: 'A simple website that displays a list of books and allows you to add and remove books from that list.',
    fullDescription: "A Web Application that Helps You Save Your Favorite Books in a List Alongside Author's Name and Gives You the Option to Edit, Remove, Add Books. Made using HTML5, CSS3, ES6, Bootstrap.",
    LongDescription: "A Web Application that Helps You Save Your Favorite Books in a List Alongside Author's Name and Gives You the Option to Edit, Remove, Add Books. Made using HTML5, CSS3, ES6, Bootstrap",
    image: {
      src: `./images/snapshoot/snapshoot_${this.id}.png`,
      alt: 'Project image',
    },
    info: {
      author: 'RAMOUN',
      type: 'Front End Dev',
      year: '2022',
    },
    technologies: ['html5', 'Bootstrap5', 'ES6'],
    buttons: {
      live: {
        text: 'see live',
        link: 'https://awesomebooks.omarramoun.com/',
        imgSrc: './images/arrow.svg',
      },
      source: {
        text: 'see source',
        link: 'https://github.com/omarramoun/Awesome-Books',
        imgSrc: './images/social/github.svg',
      },
    },
  },
  {
    id: 3,
    name: 'TO-DO List',
    description: 'To-Do List helps you organize your tasks. It lists the things that you need to do and allows you to mark them as completed.',
    fullDescription: 'To-do List Helps You Organize Your Tasks. It Lists The Things That You Need To Do And Allows You To Mark Them As Completed. Built Using Es6 And Webpack, And It Has The CRUD Features',
    LongDescription: 'To-Do List helps you organize your tasks. It lists the things that you need to do and allows you to mark them as completed. Built using ES6 and Webpack, and it has the following features: ➕ Adding a new item, ❌ Removing a selected item, ✔️ Marking a selected item as complete, 🔴 Removing all items marked as complete at once, and 🚮 Reordering a selected item (as drag-and-drop).',
    image: {
      src: `./images/snapshoot/snapshoot_${this.id}.png`,
      alt: 'Project image',
    },
    info: {
      author: 'RAMOUN',
      type: 'Front End Dev',
      year: '2021',
    },
    technologies: ['HTML5', 'CSS3', 'ES6'],
    buttons: {
      live: {
        text: 'see live',
        link: 'https://todo.omarramoun.com/',
        imgSrc: './images/arrow.svg',
      },
      source: {
        text: 'see source',
        link: 'https://github.com/omarramoun/to-do-list',
        imgSrc: './images/social/github.svg',
      },
    },
  },
  {
    id: 4,
    name: 'New York Times Clone',
    description: 'A clone of a NYT Article made using css3 features: box-model, flexbox, grid, positioning, and transormations.',
    fullDescription: 'A Clone Of an Archived Page of One of The New York Times\'s Articles From 2014. Made Using Vanilla Html5 And Css3. Implementing All Modern Css3 Features Like Flexbox, Grid, Animation, ...etc.',
    LongDescription: 'A Clone Of an Archived Page of One of The New York Times\'s Articles From 2014. Made Using Vanilla Html5 And Css3. Implementing All Modern Css3 Features Like Flexbox, Grid, Animation, ...etc.',
    image: {
      src: `./images/snapshoot/snapshoot_${this.id}.png`,
      alt: 'Project image',
    },
    info: {
      author: 'RAMOUN',
      type: 'Front End Dev',
      year: '2020',
    },
    technologies: ['HTML5', 'CSS3'],
    buttons: {
      live: {
        text: 'see live',
        link: 'https://nyt.omarramoun.com/',
        imgSrc: './images/arrow.svg',
      },
      source: {
        text: 'see source',
        link: 'https://github.com/omarramoun/NYT-Article-Clone',
        imgSrc: './images/social/github.svg',
      },
    },
  },
];

works.forEach((myWork) => {
  myWork.image = { src: `./images/snapshoot/snapshoot_${myWork.id}.png`, alt: 'Project image' };

  const article = document.createElement('article');
  article.classList.add('card', 'flex', 'flex-column', 'bg');

  const img = document.createElement('img');
  img.setAttribute('src', myWork.image.src);
  img.setAttribute('alt', myWork.image.alt);
  article.appendChild(img);

  const div = document.createElement('div');
  div.classList.add('content', 'hero');
  article.appendChild(div);

  const title = document.createElement('h3');
  title.classList.add('black', 'bold', 'cap');
  title.textContent = myWork.name;
  div.appendChild(title);

  const ul1 = document.createElement('ul');
  ul1.classList.add('info', 'flex');
  div.appendChild(ul1);

  const li1 = document.createElement('li');
  const a1 = document.createElement('a');
  a1.classList.add('category', 'flex', 'cross-center', 'ellipse', 'line-height', 'highlight', 'upper');
  a1.textContent = myWork.info.author;
  li1.appendChild(a1);
  ul1.appendChild(li1);

  const li2 = document.createElement('li');
  const a2 = document.createElement('a');
  a2.classList.add('category', 'flex', 'cross-center', 'ellipse', 'line-height', 'gray', 'cap');
  a2.textContent = myWork.info.type;
  li2.appendChild(a2);
  ul1.appendChild(li2);

  const li3 = document.createElement('li');
  li3.classList.add('category', 'flex', 'cross-center', 'ellipse', 'line-height', 'gray', 'cap');
  ul1.appendChild(li3);

  const time = document.createElement('time');
  time.classList.add('category', 'flex', 'cross-center', 'line-height', 'gray');
  time.setAttribute('datetime', '2015-10-22');
  time.textContent = myWork.info.year;
  li3.appendChild(time);

  const p = document.createElement('p');
  p.textContent = myWork.description;
  div.appendChild(p);

  const ul2 = document.createElement('ul');
  ul2.classList.add('tags', 'flex');

  myWork.technologies.forEach((item) => {
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
  button.classList.add('see', 'bg', 'round-borders', 'cap');
  button.textContent = 'see project';
  div.appendChild(button);

  worksWrapper.appendChild(article);
});

const closeModal = () => {
  const modal = document.querySelector('.modal-container');
  modal.remove();
};

const displayPopup = (work) => {
  const modal = document.createElement('div');
  modal.classList.add('modal-container', 'flex', 'cross-center', 'main-center');

  const modalWrapper = document.createElement('div');
  modalWrapper.classList.add('card', 'wrapper', 'bg', 'flex', 'flex-column');
  modal.appendChild(modalWrapper);

  const modalHeader = document.createElement('div');
  modalHeader.classList.add('model-header', 'flex', 'space-between', 'cross-center');
  modalWrapper.appendChild(modalHeader);

  const modalTitle = document.createElement('h3');
  modalTitle.classList.add('black', 'bold', 'cap');
  modalTitle.innerHTML = work.name;
  modalHeader.appendChild(modalTitle);

  const modalClose = document.createElement('a');
  modalClose.classList.add('modal-close', 'flex', 'cross-center', 'main-center');
  modalClose.addEventListener('click', closeModal);
  modalHeader.appendChild(modalClose);

  const modalCloseIcon = document.createElement('img');
  modalCloseIcon.setAttribute('src', './images/cancel.svg');
  modalCloseIcon.setAttribute('alt', 'Close');
  modalClose.appendChild(modalCloseIcon);

  const infoList = document.createElement('ul');
  infoList.classList.add('info', 'flex');
  modalWrapper.appendChild(infoList);

  let infoItem = document.createElement('li');
  let infoItemLink = document.createElement('a');
  infoItemLink.classList.add('category', 'flex', 'cross-center', 'ellipse', 'line-height', 'highlight', 'upper');
  infoItemLink.innerText = work.info.author;
  infoItemLink.href = '#';
  infoItem.appendChild(infoItemLink);
  infoList.appendChild(infoItem);

  infoItem = document.createElement('li');
  infoItemLink = document.createElement('a');
  infoItemLink.classList.add('category', 'flex', 'cross-center', 'ellipse', 'line-height', 'highlight', 'upper');
  infoItemLink.innerText = work.info.type;
  infoItemLink.href = '#';
  infoItem.appendChild(infoItemLink);
  infoList.appendChild(infoItem);

  infoItem = document.createElement('li');
  infoItemLink = document.createElement('time');
  infoItemLink.classList.add('category', 'flex', 'cross-center', 'ellipse', 'line-height', 'highlight', 'cap');
  infoItemLink.innerHTML = work.info.year;
  infoItem.appendChild(infoItemLink);
  infoList.appendChild(infoItem);

  const modalImage = document.createElement('img');
  modalImage.setAttribute('src', work.image.src);
  modalImage.setAttribute('alt', work.image.alt);
  modalWrapper.appendChild(modalImage);

  const modalBottom = document.createElement('div');
  modalBottom.classList.add('modal-bottom', 'flex', 'flex-column');
  modalWrapper.appendChild(modalBottom);

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalBottom.appendChild(modalContent);

  const modalHero = document.createElement('div');
  modalHero.classList.add('content', 'hero');
  modalContent.appendChild(modalHero);

  const modalDescription = document.createElement('p');
  modalDescription.innerHTML = work.fullDescription;
  modalHero.appendChild(modalDescription);

  const modalSide = document.createElement('div');
  modalSide.classList.add('modal-side');
  modalBottom.appendChild(modalSide);

  const tagsList = document.createElement('ul');
  tagsList.classList.add('tags', 'flex');
  modalSide.appendChild(tagsList);

  for (let i = 0; i < work.technologies.length; i += 1) {
    const tagsListItem = document.createElement('li');
    tagsList.appendChild(tagsListItem);

    const tagsListItemLink = document.createElement('a');
    tagsListItemLink.classList.add('line-height', 'round-borders');
    tagsListItemLink.innerHTML = work.technologies[i];
    tagsListItemLink.href = '#';
    tagsListItem.appendChild(tagsListItemLink);
  }

  const modalFooter = document.createElement('div');
  modalFooter.classList.add('modal-footer', 'flex', 'space-between');
  modalSide.appendChild(modalFooter);

  for (let i = 0; i < 2; i += 1) {
    const modalFooterBtn = document.createElement('button');
    modalFooterBtn.classList.add('bg', 'round-borders', 'cap');
    modalFooterBtn.type = 'button';
    const textSpan = document.createElement('span');
    textSpan.innerHTML = work.buttons[Object.keys(work.buttons)[i]].text;
    if (i === 0) {
      modalFooterBtn.addEventListener('click', () => {
        window.location.href = work.buttons.live.link;
      });
    } else {
      modalFooterBtn.addEventListener('click', () => {
        window.location.href = work.buttons.source.link;
      });
    }
    modalFooterBtn.appendChild(textSpan);
    const imgSpan = document.createElement('img');
    imgSpan.setAttribute('src', work.buttons[Object.keys(work.buttons)[i]].imgSrc);
    imgSpan.setAttribute('alt', work.buttons[Object.keys(work.buttons)[i]].text);
    modalFooterBtn.appendChild(imgSpan);
    modalFooter.appendChild(modalFooterBtn);
  }

  document.body.appendChild(modal);
};

const seeButtons = document.querySelectorAll('.see');

seeButtons.forEach((button, i) => {
  button.addEventListener('click', () => {
    displayPopup(works[i]);
  });
});
