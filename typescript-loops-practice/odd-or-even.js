/* exported oddOrEven */
function oddOrEven(numbers) {
  var result = [];
  for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number % 2 === 0) {
      result.push('even');
    } else {
      result.push('odd');
    }
  }
  return result;
}
