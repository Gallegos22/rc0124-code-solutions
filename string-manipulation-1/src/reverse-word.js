'use strict';
/* exported reverseWord */
// Define a function called 'reverseWord' with a parameter of 'word'
// Create a variable and assign it an empty string
// create a for loop that reverse the order in which the arguments are being called.
function reverseWord(word) {
  let newString = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newString = newString + word[i];
  }
  return newString;
}
