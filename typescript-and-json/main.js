'use strict';
const myArray = [
  {
    isbn: '123',
    title: 'title 1',
    author: 'author 1',
  },
  {
    isbn: '456',
    title: 'title 2',
    author: 'author 2',
  },
  {
    isbn: '789',
    title: 'title 3',
    author: 'author 3',
  },
];
console.log('myArray: ', myArray);
console.log('typeof myArray: ', typeof myArray);
console.log('JSON.stringify(myArray):', JSON.stringify(myArray));
console.log('typeof JSON.stringify(myArray): ', typeof JSON.stringify(myArray));
const student = '{"numberID":36027,"name":"Eduardo Gallegos"}';
console.log('student: ', student);
console.log('typeof student: ', typeof student);
console.log('JSON.parse(student): ', JSON.parse(student));
console.log('typeof JSON.parse(student): ', typeof JSON.parse(student));
