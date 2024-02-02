'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  let numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('getNumbersToTen() array:', getNumbersToTen());
function getEvenNumbersToTwenty() {
  let evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('getEvenNumbersToTwenty() array:', getEvenNumbersToTwenty());
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log("repeatWord('hi',5 Result):", repeatWord('hi', 5));
function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
console.log("logEachCharacter(' ') Result:", logEachCharacter(' '));
console.log("logEachCharacter('Eduardo') Result:", logEachCharacter('Eduardo'));
console.log("logEachCharacter('hello.') Result:", logEachCharacter('hello.'));
function doubleAll(numbers) {
  let doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('doubleAll([5,3,7,6]) Result:', doubleAll([5, 3, 7, 6]));
function getKeys(object) {
  let keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
}
console.log(
  getKeys({
    isbn: '32-31533',
    title: 'Speaking JS',
    author: 'Dr. Axel Rauschmayer',
  })
);
function getValues(object) {
  let values = [];
  for (let key in object) {
    values.push(object[key]);
  }
  return values;
}
console.log(
  getValues({
    isbn: '32-31533',
    title: 'Speaking JS',
    author: 'Dr. Axel Rauschmayer',
  })
);
