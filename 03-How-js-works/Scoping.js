"use strict";
function calcAge(birthYear) {
	age = 2037 - birthYear;
	console.log(firstName); // No Error as this function looks up in the global scope
	let output = "Hello World!";
	function printAge() {
		let output = `You are ${age}, born in ${birthYear}`;
		console.log(output);
	}
	printAge();
	return age;
}
const firstName = "Suprathik";
calcAge(2007);
console.log(age); // Reference Error
