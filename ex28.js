let str = "The Quick Brown Fox";
let swappedStr = "";
function letterSwap(string) {
  for (i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90)
      swappedStr += string.charAt(i).toLowerCase();
    else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122)
      swappedStr += string.charAt(i).toUpperCase();
    else swappedStr += string.charAt(i);
  }
  return swappedStr;
}

console.log(letterSwap(str));
