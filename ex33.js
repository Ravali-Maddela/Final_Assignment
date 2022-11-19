// JavaScript function to filter false, null, 0 and blank values from an array

const filterArrayValues = (arr) => {
  for (const i in arr) {
    let el = arr[i];
    if (el === false || el === null || el === 0 || el === "") {
      arr.splice(i, 1);
    }
  }
  return arr;
};

console.log(filterArrayValues([58, false, "", "abcd", true,  null, 0]));
