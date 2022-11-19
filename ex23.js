function first(arr, numOfEleToReturn) {
  if (!numOfEleToReturn) return arr[0];
  else if (arr.length === 0) return [];
  else if (numOfEleToReturn > arr.length) return arr;
  else {
    let a = [];
    for (i = 0; i < numOfEleToReturn; i++) {
      a.push(arr[i]);
    }
    return a;
  }
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -1));
