//---------------------------------------------------
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand 
// when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand

const myText = ""; // An empty string (which is also a falsy value)

const notFalsyText = myText || "Hello world";
console.log(notFalsyText); // Hello world

const preservingFalsy = myText ?? "Hi neighborhood";
console.log(preservingFalsy); // '' (as myText is neither undefined nor null)

//-----------------------------------------------------------

//The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is 
// nullish (null or undefined), the expression short-circuits with a return value of undefined
//example:-
const person = {
    name: "John Doe",
    age: 55,
    occupation: "farmer",
    address: {
      state: "North Carolina",
      city: "Lillington",
      street: "1937 Powell Farm Rd",
      zip: 27546,
      shipping_address: {
        street: "1937 Powell Farm Rd",
        zip: 27546,
      },
    },
  };
//   The expression gets way too complicated when we want to access property multiple levels deep. 
// For example, the zip code of the shipping address.

//The optional chaining operator provides simpler, more readable syntax to check the existence of properties 
// before accessing them. It saves you the trouble of manually checking each reference in the chain.
const shippingZip = person.address?.shipping_address?.zip;
console.log(shippingZip)

//-----------------------------------------------

//Immutability in javascript

// Basically, an immutable value is something that cannot be changed. Especially when developing the applications,
//  we might end up in some situations where we want to create a new object in our code, containing a new property 
//  or value while also maintaining the original value. The concept of immutability can help us to create new objects,
//   making sure that we’re not changing the original value