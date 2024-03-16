'use strict';
const $name = document.querySelector('#user-name');
console.log($name);
if (!$name) throw new Error('The $name query failed');
const $email = document.querySelector('#user-email');
console.log($email);
if (!$email) throw new Error('The $email query failed');
const $message = document.querySelector('#user-message');
console.log($message);
if (!$message) throw new Error('The $message query failed');
function handleFocus(event) {
  console.log('focus event was fired');
  const eventTarget = event.target;
  console.log(eventTarget.name);
}
function handleBlur(event) {
  console.log('blur event was fired');
  const eventTarget = event.target;
  console.log(eventTarget.name);
}
function handleInput(event) {
  const eventTarget = event.target;
  console.log(eventTarget.name);
  console.log(eventTarget.value);
}
$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);
$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);
$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);
