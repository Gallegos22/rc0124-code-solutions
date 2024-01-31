'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('convertMinutesToSeconds(2) Result:', convertMinutesToSeconds(2));
function greet(name) {
  return `Hey ${name}!`;
}
console.log("greet('Eduardo') Result:", greet('Eduardo'));
const getArea = (width, height) => {
  return width * height;
};
console.log('getArea(3,4) Result:', getArea(3, 4));
const getFirstName = (person) => {
  const firstName = person.firstName;
  return firstName;
};
console.log(
  "getFirstName({ firstName: 'Eduardo', lastName: 'Gallegos' }) Result:",
  getFirstName({ firstName: 'Eduardo', lastName: 'Gallegos' })
);
const getLastElement = (array) => {
  return array[array.length - 1];
};
console.log(
  'getLastElement([5, 10, 15, 20]) Result:',
  getLastElement([5, 10, 15, 20])
);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
console.log(
  "callOtherFunction(getLastElement,['hello','goodbye','Aloha'] Result:",
  callOtherFunction(getLastElement, ['hello', 'goodbye', 'Aloha'])
);
