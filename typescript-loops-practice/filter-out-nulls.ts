/* exported filterOutNulls */
function filterOutNulls(values: []): any {
  return values.filter((value) => value != null);
}
