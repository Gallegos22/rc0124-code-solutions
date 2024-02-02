function getStudentNames(students) {
  var myArray = [];
  for (var i = 0; i < students.length; i++) {
    myArray.push(students[i].name);
  }
  return myArray;
}
