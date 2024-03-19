'use strict';
/* exported reverse */
// Define a function named
function reverse(array) {
  const myArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    myArray.push(array[i]);
  }
  return myArray;
}
