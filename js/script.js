// Gets a reference to the form element, assuming
// it contains the ID attribute "contact-form".
var form = document.getElementById('contact-form');

// Adds a listener for the "submit" event.
form.addEventListener('submit', function(event) {

  // Prevents the browser from submitting the form
  // and thus unloading the current page.
  event.preventDefault();

  // Creates a timeout to call submitForm after one second.
  setTimeout(submitForm, 1000);

  // Monitors whether or not the form has been submitted.
  // This prevents the form from being submitted twice in cases
  // where the event callback function fires normally.
  var formSubmitted = false;

  function submitForm() {
    if (!formSubmitted) {
      formSubmitted = true;
      form.submit();
    }
  }

  // Sends the event to Google Analytics and
  // resubmits the form once the hit is done.
  gtag('event', 'signup_form_complete', {
    'event_callback': submitForm
  });
});


function get_resume() {
  window.open(
    "/resume/cv.pdf", "_blank");
}

