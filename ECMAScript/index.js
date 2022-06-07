// Let vs Const vs Var

// var
var myName = "Saqib";
myName = "Ansari";
// Here Updation is Allowed
console.log(myName);

// let
let myName2 = "Saqib";
myName2 = "Ansari";
// Here Updation is Allowed
console.log(myName2);

// const
const myName3 = "Saqib";
// myName3 = "Ansari";
// Here Updation is not Allowed and it will throw ERROR
// console.log(myName3);

// var is defined in the scope of Function
// let and const are defined in the scope of Block

function myName6() {
  var firstName = "Saqib";
  console.log(firstName);
  if (true) {
    var lastName = "Ansari";
    console.log(lastName);
  }
  console.log(lastName);
}
myName6();
// console.log(firstName)
/* It will throw error because 
firstName is out of the Function scope */

// Here it will not throw any ERROR because var is used and var has function scope

function myName4() {
  let firstName2 = "Saqib";
  console.log(firstName2);
  if (true) {
    let lastName2 = "Ansari";
    console.log(lastName2);
  }
  // console.log(lastName2);
  /* It will throw error because
  lastName2 is not defined out of the if-Scope ,i.e, Block Scope */
}
myName4();

function myName5() {
  const firstName3 = "Saqib";
  console.log(firstName3);
  if (true) {
    const lastName3 = "Ansari";
    console.log(lastName3);
  }
  // console.log(lastName3);
  /* It will throw error because
  lastName2 is not defined out of the if-Scope ,i.e, Block Scope */
}
myName5();

// Template Literals
let table = 8;
for (let i = 1; i < 11; i++) {
  console.log(` ${table} x ${i} =  ${table * i}`);
}

// Difference B/W Function and Fat Arrow Function
console.log(sum100(2, 6));
// You can call the function before its intialization in case of Normal function
// But in case of Arrow Function, you can not
function sum100(a, b) {
  return a + b;
}

// Arrow Function
// console.log(sum101(2, 1));
// It will throw ERROR because we can't call before initialization of fxn
const sum101 = (a, b) => {
  return a + b;
};
console.log(sum101(1, 9));
