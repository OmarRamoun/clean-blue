const contactForm = document.querySelector('#contact-form');
const nameField = contactForm.querySelector('#name');
const emailField = contactForm.querySelector('#mail');
const messageField = document.querySelector('#user_message');

const saveDate = () => {
  const formData = {
    name: nameField.value,
    email: emailField.value,
    msg: messageField.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
};

nameField.addEventListener('change', saveDate);
emailField.addEventListener('change', saveDate);
messageField.addEventListener('change', saveDate);

window.addEventListener('load', () => {
  const formData = JSON.parse(localStorage.getItem('formData'));
  nameField.value = formData.name;
  emailField.value = formData.email;
  messageField.value = formData.message;
});
