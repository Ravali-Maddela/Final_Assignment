// A teacher is in the process of generating few reports based on the marks scored by the students of her class in a project based assessment.

// 1: Assume that the marks of her 10 students are available in an array.
// 2: The marks are out of 25.

// Write a JavaScript program to implement the following functions:

// find_more_than_average(): Find and return the percentage of students who have scored more than the average mark of the class.

// generate_frequency(): Find how many students have scored the same marks. For example, how many have scored 0, how many have scored 1, how many have scored 3….how many have scored 25. The result should be populated in a list and returned.

let marksList = [12, 18, 25, 24, 2, 5, 18, 20, 20, 21];

function findMoreThanAvg() {
  let sum = 0;
  for (const marks of marksList) {
    sum += marks;
  }
  let avg = sum / marksList.length;
  let arr = [];
  for (const marks of marksList) {
    if (marks > avg) arr.push(marks);
  }
  let marksMoreThanAvgPercent = (arr.length * 100) / marksList.length;
  return marksMoreThanAvgPercent;
}

function generateFrequency() {
  let arr = Array(26);
  arr.fill(0);
  for (i = 0; i < arr.length; i++) {
    for (const marks of marksList) {
      if (marks === i) arr[i]++;
    }
  }
  return arr;
}

console.log(
  "students who have scored more than the average mark of the class is: ",
  findMoreThanAvg(),
  "%"
);
console.log(generateFrequency());
generateFrequency().map((el, i) => {
  console.log(i, "-", el, " times ");
});
