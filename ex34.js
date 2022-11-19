// JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position. 

const arrayRange=(startElement, arrLength)=>{
    let arr=[]
   for(i=0;i<arrLength;i++){
    arr.push(startElement++)
   }
   return arr;
}


console.log(arrayRange(1, 4));
console.log(arrayRange(-6, 4));