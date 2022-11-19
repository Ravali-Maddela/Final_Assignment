// JavaScript function to move an array element from one position to another. 

const moveElemnt = (arr, fromIndex, toIndex) => {
  if (fromIndex >= 0 && toIndex >= 0) {
    return swap(arr, fromIndex, toIndex);
  } else if (fromIndex < 0 || toIndex < 0) {
    return swap(arr, arr.length + fromIndex, arr.length + toIndex);
  }
};
function swap(arr, el1, el2) {
  let value = arr[el2];
  arr[el2] = arr[el1];
  arr[el1] = value;
  return arr;
}

console.log(moveElemnt([10, 20, 30, 40, 50], 0, 2));
console.log(moveElemnt([10, 20, 30, 40, 50], -1, -3));


