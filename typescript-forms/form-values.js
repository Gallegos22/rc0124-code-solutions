'use strict';
let $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  const messageData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(messageData);
  $contactForm.reset();
});
