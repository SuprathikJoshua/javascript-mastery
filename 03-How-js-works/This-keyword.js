"use strict";
console.log(this); // Window object in browser, global object in node.js

const calcAge = function (birthYear) {
	console.log(this); // undefined - strict mode
	return 2024 - birthYear;
};
calcAge(2007);

const calcAgeArrow = (birthYear) => {
	console.log(this); // Window object in browser, global object in node.js
	return 2024 - birthYear;
};
calcAgeArrow(2007);

const suprathik = {
	year: 2007,
	calcAge: function () {
		console.log(this); // suprathik object
		console.log(2024 - this.year);
	},
};
suprathik.calcAge();

const matilda = {
	year: 2010,
};
matilda.calcAge = suprathik.calcAge; // method borrowing
matilda.calcAge(); // matilda object & this keyword always points to the object that is calling the method

const f = suprathik.calcAge;
f(); // undefined - as this keyword is not pointing to any object here

const suprathik1 = {
	year: 2007,
	calcAge: function () {
		console.log(this); // suprathik object
		console.log(2024 - this.year);
	},

	// * We should not use arrow function as methods
	greet: () => {
		console.log(this); // Window object in browser, global object in node.js
		console.log(`Hey ${this.firstName}`); // Hey undefined - as this keyword is not pointing to any object here
	},
};
suprathik1.calcAge();

// * We should should use arrow function for functions in methods as it uses this keyword of the parent scope

// * arguments keyword - only available in regular functions
const addExpr = function (a, b) {
	console.log(arguments); // [2, 5]
	return a + b;
};
