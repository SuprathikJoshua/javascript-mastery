const jessica = {
	firstName: "Jessica",
	LastName: "Williams",
	age: 27,
	family: ["Alice", "Bob"],
};
function marryPerson(originalPerson, newLastName) {
	originalPerson.LastName = newLastName;
	return originalPerson;
}
const jessicaMarried = marryPerson(jessica, "Davis");
console.log(jessica); // { firstName: 'Jessica', LastName: 'Davis' }
console.log(jessicaMarried); // { firstName: 'Jessica', LastName: 'Davis' }

// * use spread operator to create a new object
// Shallow copy
const jessicaNew = { ...jessica, LastName: "Davis" };
console.log(jessicaNew); // { firstName: 'Jessica', LastName: 'Davis' }

//Deep copy
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push("Mary");
console.log(jessica.family); // ["Alice", "Bob"]
console.log(jessicaClone.family); // ["Alice", "Bob", "Mary"]
