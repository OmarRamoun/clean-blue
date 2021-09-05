const msgBubble = document.querySelector('#msg-bubble');
const msgClsoeBtn = msgBubble.querySelector('span');
const msgContent = 'The content of the email field has to be in lower case.';

function checkLower(input) {
  console.log("in checkLower")
  if (input === input.toLowerCase()) {
    removeBubble();
    msgBubble.innerText = '';
    return true;
  } else {
    // input.classList.add('email-input-error');
    msgBubble.firstChild.innerText = msgContent;
    showBubble();
    return false;
  }
}

function removeBubble() {
  console.log("in remvoe bubble");
  msgBubble.classList.add('show_hide');
}

function showBubble() {
  console.log("in show bubble");
  msgBubble.classList.remove('show_hide');
}

msgClsoeBtn.style.cursor = 'pointer';
msgClsoeBtn.addEventListener('click', () => {
  removeBubble();
});
