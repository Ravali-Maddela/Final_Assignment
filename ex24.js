function last(arr, numOfEleToReturn) {
  if (!numOfEleToReturn) return arr[arr.length - 1];
  else if (arr.length === 0) return [];
  else if (numOfEleToReturn > arr.length) return arr;
  else {
    let a = [];
    for (i = arr.length-1; numOfEleToReturn >0; numOfEleToReturn--){
        a.unshift(arr[i])
        i--;
    } return a;
  }
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
