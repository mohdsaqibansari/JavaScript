// Date Object contains a number that represents milliseconds since  1st January 1970

// Four ways to create Date Object

// new Date():First
// new Date(year,month,day,hours,minutes,seconds,milliseconds)
// Second: It takes 7 Arguments.
// new Date(millisecons): Third
// new Date(date string):Fourth

let currDate = new Date();
console.log(currDate); //It will  give Time according to GMT
// To get time in IST
console.log(currDate.toLocaleString()); //It will give perfect Time according to INDIA
console.log(currDate.toString()); //It will give perfect Time with Day as well according to INDIA

// Date.now(): It returns milliseconds since 1st Jan 1970
console.log(Date.now());

// If you are providing any one argument then you have to provide month atleast.
let myDate = new Date(2022, 11, 11, 21);
console.log(myDate.toLocaleString());

let myDate2 = new Date("December 07, 2022 12:00:00");
console.log(myDate2.toLocaleString());

// How to Get the Individual Date

console.log(currDate.toLocaleString());
console.log(currDate.getFullYear());
console.log(currDate.getMonth());
console.log(currDate.getDate());
console.log(currDate.getDay());

// How to Set Individual Date
console.log(currDate.setFullYear(11));
// And so on...

// To get only Date
console.log(new Date().toLocaleDateString());

// To get Only Time
console.log(new Date().toLocaleTimeString());

// To get Both
console.log(new Date().toLocaleString());
console.log(new Date().toString());
