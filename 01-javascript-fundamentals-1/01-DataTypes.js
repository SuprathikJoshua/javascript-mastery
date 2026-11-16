// JS is a dynamically typed language for values and not for variables
let myVariable = 10; // myVariable is a number
myVariable = "Hello"; // myVariable is now a string
myVariable = true; // myVariable is now a boolean

// Type of null is an object
console.log(typeof null); // Output: "object"

// Type of undefined is undefined
let myUndefinedVariable;
console.log(typeof myUndefinedVariable); // Output: "undefined"

// Nan - not a number
// Type of NaN is a number
let myNaNVariable = NaN;
console.log(typeof myNaNVariable); // Output: "number"

/* 
Type Conversion - Manual conversion of types 
Type Coercion - Automatic converstion of types by JS
*/
const year = "2007";
console.log(year + 19); // Type coercion - JS automatically converts 19 to string
console.log(Number(year) + 19); // Type conversion - Manual conversion
