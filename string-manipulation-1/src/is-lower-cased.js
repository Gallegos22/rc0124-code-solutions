'use strict';
/* exported isLowerCased */
// Define a function named 'isLowerCase' with a parameter of word
// make an 'if' statement that compares the parameter with a lowerCased version of the parameter
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
