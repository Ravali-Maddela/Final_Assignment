var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3, 'a'];

var c = 0;
var highCount = 0;
var value = 0;
var repeatItem;
function mostFrequentItem(arr) {
  for (i = 0; i < arr.length; i++) {
    c = 0;
    for (j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        c++;
        value = arr[i];
      }
    }
    if (c > highCount) {
      highCount = c;
      repeatItem = value;
    }
  }
  return repeatItem + " ( " + highCount + " times )";
}
console.log(mostFrequentItem(arr1));
