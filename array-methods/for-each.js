'use strict';
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('In Order:');
values.forEach(function (numbers) {
  console.log(numbers);
});
console.log('Reverse Order: ');
values.forEach(function (index) {
  console.log(values[values.length - 1 - index]);
});
