/* exported findIndex */
function findIndex(array: [], value: any[]): any {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
}
