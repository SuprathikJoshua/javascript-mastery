"use strict";
/*
 * Functions - Used to encapsulate code that can be reused multiple times. Functions can take in parameters and return values.
 */

function func() {
	console.log("Hi there!");
}
// Calling / running / invoking the function
func();

function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}

fruitProcessor(5, 0); // Calling the function with arguments 5 and 0

// Arrow functions - A more concise way to write functions
// Arrow functions do not have their own 'this' keyword and cannot be used as constructors
const calcAge = (birthYear) => 2024 - birthYear;
console.log(calcAge(2007)); // Output: 17

// Functions calling other functions
function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);
	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
	return juice;
}
