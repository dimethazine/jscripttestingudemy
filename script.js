'use strict';

// THIS IS ALL SO IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// Passing arguments - value vs reference
// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   // if (passenger.passport === 24739479284) {
//   //   alert('Checked in');
//   // } else {
//   //   alert('Wrong passport!');
//   // }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // Is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);
// console.log(jonas);
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

// First-class and higher-order functions
// function count() {
//   let counter = 0;
//   console.log(counter);
//   return function () {
//     counter++;
//     console.log(counter);
//   };
// }
// console.log(count());
// console.log(count());
//
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
// Functions accepting callback functions
// Roy TESTING FUNCTION CALLBACKS WITH HIGHER FUNCTIONS AND LOWER
// function onlyLettersAndNumbers(str) {
//   const b = /^[0-9.,]*$/.test(str);
//   if (b) return testF1(str);
//   else console.log(`${str} is not a number.`);
// }

// const pChange = function (a) {
//   console.log(`${a.startsWith('$') ? '' : '$'}${a}`);
// };

// const testF1 = function (money) {
//   const a = money.split('');
//   if (money.indexOf('.') == -1) {
//     a.push('.00');
//     const b = a.join('');
//     pChange(b);
//   } else {
//     const a = money.split('.');
//     const b = a[1].split('');
//     const change = '.' + b[0] + b[1];
//     // console.log(change);
//     pChange(a[0] + change);
//   }
// };
// const testF3 = function (money) {
//   onlyLettersAndNumbers(money.trim());
// };

// const testF2 = function (val) {
//   return testF1(val + '');
// };
// // console.log('10.1233'.split('.'));
// testF3('  100.54  ');

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// // console.log(oneWord('hello world hi'));
// // console.log(upperFirstWord('hello world hi this is me'));

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('👏');
// };
// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);
// //
///////////////////////////////////////////////
///////////////////////////////////////////////
//Functions Returning Functiongs
// - call greet(variable) => lower level function (variable) => console.log('');

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// // greeterHey is essentially "greet('Hey')" as a variable. Such as the following:
// // greeterHey (greet('Hey')('Roy'))
// greeterHey('Roy');
// greeterHey('Brooke');

// greet('Hello')('Roy');
//
///////////////////////////////////////////////
//////////////////////////////////////////////// The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Roy Komprath');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// Call method
const book = lufthansa.book;
// Does NOT work
// book(255, 'Roy Komprath');
lufthansa.book.call(eurowings, 255, 'Roy Komprath');
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);
//////////////////////////////////////////////
// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

//
//////////////////////////////////////////////
//

//

//

//

//

//

//
