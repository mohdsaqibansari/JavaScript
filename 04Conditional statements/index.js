// if-else condition
var a = 11;
if (a % 2 == 0) {
  console.log("Even");
} else console.log("Odd");

// Leap Year or Not
var year = 2020;
debugger;
// Debugger is used to check how the lines has been executed
// Copy this code in console and hit enter.
// Then press next to check the flow of code.
if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log("A Leap year");
    } else console.log("Not a Leap Year");
  } else console.log("A Leap Year");
} else console.log("Not a Leap Year");

// Truthy and Falsy Values
// We have 5 Falsy Values
// 0,"",undefeined, null, NaN,false
if ("") {
  console.log("You Won");
} else console.log("You Lost");

// Ternary Operator
// It is the only operator which takes 3 operands
// Syntax:
// variablename=data
// (condition)?value1:value2
var a = 15;
a > 10 ? console.log("yes") : console.log("no");
// Or
console.log(a > 10 ? "yes" : "no");

// Switch Statement
var area = "triangle";
var pi = 3.14,
  r = 3,
  l = 4,
  b = 3,
  h = 5;
switch (area) {
  case "circle":
    console.log("Area of " + area + " is : " + pi * r * r);
    break;
  case "triangle":
    console.log("Area of " + area + " is : " + (l * b) / 2);
    break;
  case "rectangle":
    console.log("Area of " + area + " is : " + l * b);
    break;
  default:
    console.log("Invalid Entry ");
    break;
}

// while Loop: Initialize, Condition, Increment/Decrement.
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// do-while Loop
// This loop will execute atleast once whether the condition is true or not
var num = 30;
do {
  console.log(num);
  num++;
} while (num < 10);

// for loop
// Syntax: for(initializer;condition;iteration)
// {
// }
for (var i = 0; i < 11; i++) {
  console.log(i);
}

// Table for a given Number
var x = 9;
for (var i = 1; i < 11; i++) {
  console.log(`${x} x  ${i}  = ${x * i}`);
}
