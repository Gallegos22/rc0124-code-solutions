/* exported oddOrEven */
function oddOrEven(numbers: number[]): any {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 === 0) {
      result.push('even');
    } else {
      result.push('odd');
    }
  }
  return result;
}
