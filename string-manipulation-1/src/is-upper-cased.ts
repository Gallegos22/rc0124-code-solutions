/* exported isUpperCased */
// define a function named 'isUpperCased' with a parameter 'word'
// create an if statement that will return whether or not the parameter is upper cased
// if the parameter is not then return false otherwise return true

function isUpperCased(word: string): boolean {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
