const color: string[] = ['red', 'white', 'blue'];
console.log('value of colors[0]:', color[0]);
console.log('value of colors[1]:', color[1]);
console.log('value of colors[2]:', color[2]);

console.log(`America is ${color[0]} ${color[1]} ${color[2]}`);

color[2] = 'green';

console.log(`Mexico is ${color[0]} ${color[1]} ${color[2]}`);

console.log('value of color:', color);

const students: string[] = ['Anakin', 'Padme', 'Ahsoka', 'Rex'];

const numberOfStudents: number = students.length;

console.log(`There are ${numberOfStudents} students in the class.`);

const lastIndex: number = numberOfStudents - 1;

const lastStudent: string = students[lastIndex];

console.log(`There last student in the array is ${lastStudent}.`);

console.log('value of students:', students);
