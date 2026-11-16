/*
 * Objects - used to store data in key-value pairs. Objects can contain properties and methods. Order of elements is not important.
 */
const person = {
	firstName: "Suprathik",
	lastName: "Joshua",
	year: 2007,
	calcAge: function () {
		return 2024 - this.year;
	},
	friends: ["A", "B", "C"],
};

console.log(person.firstName); // Output: Suprathik
console.log(person["lastName"]); // Output: Joshua
console.log(person.calcAge()); // Output: 17

let nameKey = "Name";
console.log(person[`first${nameKey}`]); // Output: Suprathik

// * When needed to calculate the property name dynamically, we can use bracket notation. When we know the property name, we can use dot notation. Dot notation is more readable and easier to use.

const interestedIn = prompt(
	"What do you want to know about Suprathik? Choose between firstName, lastName, and year.",
);
console.log(person[interestedIn]); // Output: Value of the property based on user input

// If we access a property that does not exist, it will return undefined. We can use this to check if the property exists and provide a default value if it does not.
if (person[interestedIn]) {
	console.log(person[interestedIn]);
} else {
	console.log("Wrong request! Choose between firstName, lastName, and year.");
}

//Challenge : Print the statement dynamically - "Suprathik has 3 friends, his best friend is A"

console.log(
	`${person.firstName} has ${person.friends.length}, his best friend is ${person.friends[0]}`,
);
