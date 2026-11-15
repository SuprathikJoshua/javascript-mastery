/*
Control Statements - These allow program to take decisions based on specific conditions

3 types - Conditional, Looping, Switching
*/

// Conditinal
let age = 19;
if (age < 18) console.log("You are a minor");
else console.log("You are a major!");

// Looping
for (let num = 0; num < 11; ++num) {
	console.log(`Number is ${num}`);
}

//Switching
const day = "monday";
switch (day) {
	case "monday":
		console.log("First day of the week");
		break;
	case "sunday":
		console.log("Last day of the week");
		break;
	case "tuesday":
	case "wednesday":
	case "friday":
	case "saturday":
		console.log("A day of the week");
		break;
	default:
		console.log("Not a day of the week");
}
