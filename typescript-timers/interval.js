'use strict';
const $heading1 = document.querySelector('h1 ');
if (!$heading1) throw new Error('The $heading query failed');
let countDown = 4;
const intervalId = setInterval(myCallBack, 1000);
console.log(intervalId);
function myCallBack() {
  countDown--;
  if (!$heading1) throw new Error('The $heading query failed');
  $heading1.textContent = countDown.toString();
  if (countDown < 1) {
    $heading1.textContent = '~Earth Beeeeelowwwww Us~';
  }
}
