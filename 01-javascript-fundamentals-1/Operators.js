/*
 * There are 3 types of operators
 *1. Arthemetic Operators
 *2. Assignment Operators
 *3. Comparision Operators
 */

// Arthemetic Operators
console.log(1 + 1, 1 - 1, 2 * 2, 2 / 2, 2 ** 3);

// + has another function - Connect 2 strings
console.log("Hello " + "World!");

// Assignment Operators
let x = 0;
console.log(x++, (x += 10), (x -= 5), (x *= 5), (x /= 5), x--);

// Comparision Operators
let a = 10,
	b = 9;
console.log(a > b, a >= b, a < b, a <= b, a == b, a === b);

// Difference between == & ===
// * === => No Type coersion & == => Type coercion
console.log(18 === 18); // True
console.log(18 == 18); // True
console.log("18" == 18); // True
console.log("18" === 18); // ? False => Strict checking bcs of ===
