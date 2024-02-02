/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var myArray = [];
  for (var i = 0; i < words.length; i++) {
    myArray.push(words[i] + suffix);
  }
  return myArray;
}
