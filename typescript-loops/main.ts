/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen(): number[] {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('getNumbersToTen() array:', getNumbersToTen());

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('getEvenNumbersToTwenty() array:', getEvenNumbersToTwenty());

function repeatWord(word: string, times: number): any {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log("repeatWord('hi',5 Result):", repeatWord('hi', 5));

function logEachCharacter(string: string): any {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

console.log("logEachCharacter(' ') Result:", logEachCharacter(' '));
console.log("logEachCharacter('Eduardo') Result:", logEachCharacter('Eduardo'));
console.log("logEachCharacter('hello.') Result:", logEachCharacter('hello.'));

function doubleAll(numbers: number[]): number[] {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('doubleAll([5,3,7,6]) Result:', doubleAll([5, 3, 7, 6]));

function getKeys(object: Record<string, unknown>): any {
  const keys = [];
  for (const key in object) {
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

function getValues(object: Record<string, unknown>): any {
  const values = [];
  for (const key in object) {
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
