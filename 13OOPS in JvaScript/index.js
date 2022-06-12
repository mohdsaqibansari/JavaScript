/*
What is  Object Literal?
Object Literal is a key:value Pair Data Structure
Storing variables and functions together in a container.
And this Container is Object.
*/

// 1st way to create Object

let bioData = {
  myName: "Saqib",
  myAge: 25,
  getData: function () {
    console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  },
};
bioData.getData();

// What if we want Object as a value inside an Object

let bioDataNew = {
  myName: {
    fName: "Saqib",
    lName: "Ansari",
  },
  myAge: 25,
  getData: function () {
    console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  },
};
console.log(bioDataNew.myName.fName);
console.log(bioDataNew.myName.lName);

// What is this Object?
/*It contains the current context and this object can have different values
 depending on where it is used. */

var myName2 = "Saqib";
function myName3() {
  console.log(this.myName2);
}
myName3();

const obj = {
  myAge: 25,
  myName: function () {
    console.log(this.myAge);
  },
};
obj.myName();
// Here, you will see that this will refer this object obj.

const saqib = {
  name: "Saqib",
  sum: function () {
    var add = 2 + 2;
    console.log(add);
    console.log(this);
    console.log(this.name);
  },
};
saqib.sum();
// Similarly here, if we mention this under an object then we will get this object saqib.
// when we do console.log(this)

// If we use fat arrow function in the object and use this keyword then we will not get
// object but window .

const obj2 = {
  name: "Saqib",
  age: () => {
    console.log(this);
  },
};
obj2.age();
// So, we can not use this in fat arrow function.

// Ques.
const bioData2 = {
  myName: {
    fName: "Saqib",
    lName: "Ansari",
  },
  myAge: 25,
  getData: function () {
    console.log(this.myName.lName);
  },
};
bioData2.getData();

// Array destructuring
const myBioData = ["Saqib", "Ansari", 25];
let fName = myBioData[0];
let lName = myBioData[1];
let myAge2 = myBioData[2];
// But how will we be able to  do this if there are 1000 of data in the array?

let [a, b, c, d = "M.Tech"] = myBioData; //We can add data in the array too
console.log(a);
console.log(d);

// Object Destructuring
const myData2 = {
  myName: "Saqib",
  myAge: 25,
};

let { myName, myAge, g = "M.Tech" } = myData2;
console.log(myName);
console.log(g);

// Object Properties
//How can we use Dynamic Properties

let myName1 = "Saqib";
let myAge1 = 25;
const myBioData1 = {
  [myName1]: "M.Tech Student",
  [24 + 1]: "My Age",
};
console.log(myBioData1);

// Spread Operator

const colors = ["red", "green", "blue", "white", "black"];
// const myColors = ["yellow", ...colors];
const myColors = [...colors, "yellow"];
console.log(myColors);

// Array includes
const isPresent = colors.includes("red");
console.log(isPresent);

// Exponential Operator **
console.log(2 ** 3);

// object.values
const person = {
  name: "saqib",
  age: 25,
};
console.log(Object.values(person));
// It will give only the values
console.log(Object.entries(person));
// It will change object into array
