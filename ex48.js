// Add, subtract ,calculate average of all elements of an array using reduce() method.

const numbers = [175, 50, 25];

//addition
let add = numbers.reduce((total, el) => (total += el), 0);

//subtraction
let sub = numbers.reduce((prev,curr, index, arr) => {
  if (index < numbers.length - 1) {
    prev = prev - arr[index + 1];
  }
  return prev;
}, numbers[0]);
//average
let avg = numbers.reduce((_) => add / numbers.length, 0);


console.log(add);
console.log(sub);
console.log(avg);
