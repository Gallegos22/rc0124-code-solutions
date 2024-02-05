/* exported isVowel */
// Define a function named 'isVowel' with a parameter of 'char'
// the function needs to return a boolean by comparing if the parameter is a Vowel or NOT.

function isVowel(char: string): boolean {
  if (char === 'A' || char === 'a') {
    return true;
  } else if (char === 'E' || char === 'e') {
    return true;
  } else if (char === 'I' || char === 'i') {
    return true;
  } else if (char === 'O' || char === 'o') {
    return true;
  } else if (char === 'U' || char === 'u') {
    return true;
  } else {
    return false;
  }
}
