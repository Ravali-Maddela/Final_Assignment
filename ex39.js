let string = "Maggie Noodl$s";

function checkChar(string) {
  if (string.includes("$")) throw " Given string has $ character";
  else return string;
}

try {
  console.log(checkChar(string));
} catch (error) {
  console.log("Error Occured :", error);
} finally {
  console.log('checked whether the string has "$" symbol');
}
