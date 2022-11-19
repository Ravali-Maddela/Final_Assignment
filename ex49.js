// Subtract the element of an array using both reduce () and reduceRight() and see the difference. 
const numbers = [175, 50, 25];

//sub using reduce
let sub = numbers.reduce((prev, curr) => (prev -= curr));

//sub using reduceRight
let subright = numbers.reduceRight((prev, curr) => (prev -= curr));

console.log(sub);
console.log(subright);
