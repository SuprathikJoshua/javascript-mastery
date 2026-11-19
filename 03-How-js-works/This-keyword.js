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
