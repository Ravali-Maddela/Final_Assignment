// Checks input string is a valid date formatted as "mm/dd/yyyy" or "mm-dd-yyy"
function checkDate(dateString) {
  // First check for the pattern
  if (!/^\d{1,2}[-\/]\d{1,2}[-\/]\d{4}$/.test(dateString)) return false;

  
  let fmt1=dateString.split("/");
  let fmt2=dateString.split("-");

//splits the given date
 if(fmt1.length>1) var parts = dateString.split("/")
 else if(fmt2.length>1)  var parts = dateString.split("-")

 // Parse the date parts to integers
  var day = parseInt(parts[1], 10);
  var month = parseInt(parts[0], 10);
  var year = parseInt(parts[2], 10);

  // Check the ranges of month and year
  if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;

  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Adjust for leap years
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
    monthLength[1] = 29;

  // Check the range of the day
  return day > 0 && day <= monthLength[month - 1];
}
console.log(checkDate("06/09/1999"));
console.log(checkDate("14-08-1999"));
console.log(checkDate("08-14-1999"));
