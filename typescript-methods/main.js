'use strict';
const heroes = ['Batman', 'Flash', 'Spider-Man', 'Iron-Man'];
let randomNumber = Math.random();
randomNumber = Math.random() * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);
const library = [
  {
    title: 'Book1',
    author: 'Author1',
  },
  {
    title: 'Book2',
    author: 'Author2',
  },
  {
    title: 'Book3',
    author: 'Author3',
  },
];
const lastBook = library.pop();
console.log('lastBook:', lastBook);
const firstBook = library.shift();
console.log('firstBook:', firstBook);
const js = {
  title: 'JavaScript For Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);
const fullName = 'Eduardo Gallegos';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
const employee = {
  name: 'Eduardo Gallegos',
  age: 22,
  position: 'Student',
};
const employeeKeys = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('employeeValues:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('employeePairs:', employeePairs);
