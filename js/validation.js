const msgBubble = document.querySelector('#msg-bubble');
const msgClsoeBtn = msgBubble.querySelector('span');
const msgContent = 'The content of the email field has to be in lower case.';

const removeBubble = () => {
  msgBubble.classList.add('show_hide');
};

const showBubble = () => {
  msgBubble.classList.remove('show_hide');
};

const checkLower = (input) => {
  if (input === input.toLowerCase()) {
    removeBubble();
    msgBubble.innerText = '';
    return true;
  } else {
    msgBubble.firstChild.innerText = msgContent;
    showBubble();
    return false;
  }
};

msgClsoeBtn.style.cursor = 'pointer';
msgClsoeBtn.addEventListener('click', () => {
  removeBubble();
});
