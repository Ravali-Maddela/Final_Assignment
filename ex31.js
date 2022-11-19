//JavaScript function to find an array contains a specific element

const contains = (arr, elementToBePresent) => {
  if (arr.includes(elementToBePresent)) return true;
  else return false;
};

console.log(contains([2, 5, 5, 5, 8, 7, 9, 6], 5));
