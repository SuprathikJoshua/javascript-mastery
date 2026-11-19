// Variable hoisting
console.log(me); // undefined
console.log(age); // Reference Error
console.log(year); // Reference Error

var me = "Suprathik";
let age = 19;
const year = 2007;

// Function hoisting

console.log(addDecl(2, 3)); // 5
console.log(addExp(2, 3)); // Reference Error - as declared by const
console.log(addArrow(2, 3)); // Reference Error - as declared by const
console.log(addExp1(2, 3)); // Type Error - as declared by var and not initalised due to which var variables will be undefined at first
console.log(addArrow1(2, 3)); // Type Error

function addDecl(a, b) {
	return a + b;
}

const addExp = function (a, b) {
	return a + b;
};

const addArrow = (a, b) => {
	return a + b;
};

var addExp1 = function (a, b) {
	return a + b;
};

var addArrow1 = (a, b) => {
	return a + b;
};
