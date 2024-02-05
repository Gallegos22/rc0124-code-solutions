/* exported getWords */
// Define a function named 'getWords' with a parameter of string
// have it return an an empty array if the argument is empty
// otherwise have it return the an array of the arguments split up

function getWords(string: string): string[] {
  if (string === '') {
    return [];
  } else {
    const newWord = string.split(' ');
    return newWord;
  }
}
