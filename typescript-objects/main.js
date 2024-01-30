'use strict';
const student = {
  firstName: 'Eduardo',
  lastName: 'Gallegos',
  age: 22,
};
const fullName = `${student.firstName} ${student.lastName}`;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Electrician';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
const vehicle = {
  make: 'toyota',
  model: 'rav4',
  year: 2000,
};
vehicle['color'] = 'Gray';
vehicle['isConvertible'] = false;
console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
const pet = {
  name: 'Dream',
  kind: 'Husky',
};
delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
