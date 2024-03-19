'use strict';
let isOn = true;
const $background = document.querySelector('.background');
const $lightbulb = document.querySelector('.lightbulb');
if (!$background) throw new Error('The $background query failed');
if (!$lightbulb) throw new Error('The $lightbulb query failed');
function lightBulb() {
  isOn = !isOn;
  if (isOn) {
    $background.className = 'background is-lit';
    $lightbulb.className = 'lightbulb is-on';
  } else {
    $background.className = 'background';
    $lightbulb.className = 'lightbulb';
  }
}
$lightbulb.addEventListener('click', lightBulb);
