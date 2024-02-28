'use strict';
/* exported compact */
function compact(array) {
  const truthyOrFalsy = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      truthyOrFalsy.push(array[i]);
    }
  }
  return truthyOrFalsy;
}
