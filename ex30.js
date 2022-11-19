//remove specific element

const removeArrayElement = (arr, elementToDelete) => {
  for (const el in arr) {
    if (arr[el] === elementToDelete) {
      arr.splice(el, 1);
      return arr
    }
  }
};
console.log(removeArrayElement([2, 5, 9, 6], 9));
