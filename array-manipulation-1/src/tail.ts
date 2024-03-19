/* exported tail */
// Define a function named 'tail' with a parameter of array
// create an empty array so we can push of values into this new array
// return the new array

function tail(array: any): unknown {
  const myArray = [];
  for (let i = 1; i < array.length; i++) {
    myArray.push(array[i]);
  }
  return myArray;
}
