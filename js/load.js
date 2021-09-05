const worksWrapper = document.querySelector('#works .wrapper');

const work1 = {
  id: 1,
  name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  LongDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
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
  buttons: {
    live: {
      text: 'see live',
      link: '#',
      imgSrc: './images/arrow.svg',
    },
    source: {
      text: 'see source',
      link: '#',
      imgSrc: './images/social/github.svg',
    },
  },
};
const work2 = {
  id: 2,
  name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  LongDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
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
  buttons: {
    live: {
      text: 'see live',
      link: '#',
      imgSrc: './images/arrow.svg',
    },
    source: {
      text: 'see source',
      link: '#',
      imgSrc: './images/social/github.svg',
    },
  },
};
const work3 = {
  id: 3,
  name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  LongDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
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
  buttons: {
    live: {
      text: 'see live',
      link: '#',
      imgSrc: './images/arrow.svg',
    },
    source: {
      text: 'see source',
      link: '#',
      imgSrc: './images/social/github.svg',
    },
  },
};
const work4 = {
  id: 4,
  name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  LongDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
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
  buttons: {
    live: {
      text: 'see live',
      link: '#',
      imgSrc: './images/arrow.svg',
    },
    source: {
      text: 'see source',
      link: '#',
      imgSrc: './images/social/github.svg',
    },
  },
};
const works = [work1, work2, work3, work4];

for (let i = 1; i <= 4; i += 1) {
  const myWork = works[i - 1];
  myWork.id = i;
  myWork.name = `Tonic ${i}`;
  myWork.image = { src: `./images/snapshoot/snapshoot_${i}.svg`, alt: 'Project image' };

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
  // works.push(myWork);
}

function closeModal() {
  const modal = document.querySelector('.modal-container');
  modal.remove();
}

function displayPopup(work) {
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
  modalDescription.innerHTML = work.description;
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
    modalFooterBtn.appendChild(textSpan);
    const imgSpan = document.createElement('img');
    imgSpan.setAttribute('src', work.buttons[Object.keys(work.buttons)[i]].imgSrc);
    imgSpan.setAttribute('alt', work.buttons[Object.keys(work.buttons)[i]].text);
    modalFooterBtn.appendChild(imgSpan);
    modalFooter.appendChild(modalFooterBtn);
  }

  document.body.appendChild(modal);
}

const seeButtons = document.querySelectorAll('.see');

for (let i = 0; i < seeButtons.length; i += 1) {
  seeButtons[i].addEventListener('click', () => {
    displayPopup(works[i]);
  });
}

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 4; i++) {
  console.log(works[i].name);
  console.log(works[i].image.src);
  console.log(works[i]);
}
