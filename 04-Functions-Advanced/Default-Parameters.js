"use strict";
// * Javascript doesn't have pass by reference, it has pass by value.
const bookings = [];

// * ES6
const createBooking = function (
	flightNum,
	numPassengers = 1,
	price = 199 * numPassengers,
) {
	// * ES5
	// numPassengers = numPassengers || 1
	// price = price || 199
	const booking = {
		flightNum,
		numPassengers,
		price,
	};
	console.log(booking);
	bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 3);
