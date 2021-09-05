// Gets a reference to the form element, assuming
// it contains the ID attribute "contact-form".
const form = document.getElementById('contact-form');
const email = form.querySelector('input[type="email"]');

// Adds a listener for the "submit" event.
form.addEventListener('submit', (event) => {
  // Prevents the browser from submitting the form
  // and thus unloading the current page.
  if (!checkLower(email.value)) {
    event.preventDefault();
  } else {
    // Creates a timeout to call submitForm after one second.
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
    gtag('event', 'signup_form_complete', {
      event_callback: submitForm,
    });
  }
});

function getResume() {
  window.open(
    '/resume/cv.pdf', '_blank',
  );
}
