'use strict';
/* exported capitalize */
// define a function called 'capitalize' with a parameter of 'word',
// return the first letter of every word capitalized
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
