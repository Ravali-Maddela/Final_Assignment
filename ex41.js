let date = new Date();
let day;
console.log(date);
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let hours=(date.getHours() % 12) || 12
for (i = 1; i <= days.length; i++) {
  if (date.getDay() === i) day = days[i];
}
console.log("Today is : ", day);
console.log(
  "Current time is : ",
  hours,
  ":",
  date.getMinutes(),
  ":",
  date.getSeconds(),
  date.getHours() >= 12 ? "PM" : "AM"
);
