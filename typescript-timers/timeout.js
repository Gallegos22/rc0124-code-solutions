'use strict';
const $heading = document.querySelector('h1');
if (!$heading) throw new Error('The $heading query failed');
setTimeout(() => {
  $heading.textContent = 'Hello There';
}, 2000);
