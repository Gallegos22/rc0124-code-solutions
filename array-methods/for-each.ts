const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In Order:');

values.forEach(function (numbers: number): any {
  console.log(numbers);
});

console.log('Reverse Order: ');

values.forEach(function (index: any): any {
  console.log(values[values.length - 1 - index]);
});
