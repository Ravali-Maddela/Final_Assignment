var arr = [3, 8, 7, 6, 5, -5, -7, -8, 0, -1, 1];
 
var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];

function sortFn(arr) {
  let greaterValues = [];
  let lesserValues = [];
  let zeroValues = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) lesserValues.push(arr[i]);
    else if (arr[i] === 0) zeroValues.push(arr[i]);
    else greaterValues.push(arr[i]);
  }
  return lesserValues
    .sort()
    .reverse()
    .concat(zeroValues)
    .concat(greaterValues.sort());
}

console.log(sortFn(arr));
console.log(sortFn(arr1))
