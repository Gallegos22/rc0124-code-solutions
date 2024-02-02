/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): any {
  const myArray = [];
  for (let i = 0; i < words.length; i++) {
    myArray.push(words[i] + suffix);
  }
  return myArray;
}
