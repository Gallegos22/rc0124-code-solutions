/* exported initial */
// Define a function named initial with a parameter of 'array' and a return value of unknown
// create an empty array where our new values will go
// create a for loop to loop through the argument and subtract 1 from it.
// push the result of the expression into the new array we created
// return the new array

function initial(array: any): unknown {
  const myArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    myArray.push(array[i]);
  }
  return myArray;
}
