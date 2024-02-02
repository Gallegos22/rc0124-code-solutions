/* exported getStudentNames */
interface Students {
  name: string;
}

function getStudentNames(students: Students[]): string[] {
  const myArray = [];
  for (let i = 0; i < students.length; i++) {
    myArray.push(students[i].name);
  }
  return myArray;
}
