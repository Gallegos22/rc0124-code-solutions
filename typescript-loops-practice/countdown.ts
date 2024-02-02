/* exported countdown */
function countdown(number: number): any {
  const array = [];
  while (number !== -1) {
    array.push(number);
    number--;
  }
  return array;
}
