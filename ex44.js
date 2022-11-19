// Write a code to  create  an Object using Object Literal.  

// Use Object.values() method to get values of property in an Object. 

// Write A JavaScript program to get property names and it's values. 

let object={
    name:'Sabrina',
    age:22,
    gender:'F',
    city:'Hyd'
}

console.log(' values of an object',Object.values(object));

console.log('Keys of an object ',(Object.keys(object)));
console.log('all keys', Object.getOwnPropertyNames(object));
