/* exported filterOutNulls */
function filterOutNulls(values) {
  return values.filter(function (value) {
    return value != null;
  });
}
