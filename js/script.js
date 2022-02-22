// Gets a reference to the form element, assuming
// it contains the ID attribute "contact-form".
const form = document.getElementById('contact-form');
const email = form.querySelector('input[type="email"]');

// Adds a listener for the "submit" event.
form.addEventListener('submit', (event) => {
  // Prevents the browser from submitting the form
  // and thus unloading the current page.
  // eslint-disable-next-line
  if (!checkLower(email.value)) {
    event.preventDefault();
  } else {
    // Creates a timeout to call submitForm after one second.
    // eslint-disable-next-line
    setTimeout(submitForm, 1000);

    // Monitors whether or not the form has been submitted.
    // This prevents the form from being submitted twice in cases
    // where the event callback function fires normally.
    let formSubmitted = false;

    const submitForm = () => {
      if (!formSubmitted) {
        formSubmitted = true;
        form.submit();
      }
    };

    // Sends the event to Google Analytics and
    // resubmits the form once the hit is done.
    // eslint-disable-next-line
    gtag('event', 'signup_form_complete', {
      event_callback: submitForm,
    });
  }
});

// eslint-disable-next-line
function get_resume() {
  window.open(
    '/resume/resume.pdf', '_blank',
  );
}
