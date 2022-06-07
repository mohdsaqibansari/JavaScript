// function functionName()
/* { Statements} */

function sum(a = 0, b = 0) {
  console.log(a + b);
}
sum(10, 5);
sum();

// Difference between fxn parameters and fxn arguments
/*Parameters are names listed in the Function's definition like function name(a,b) 
here, a and b are the parameters
Arguments are the real values that are passed to the Function like name(1,5) 
while calling the function */

// Interview questuon: Why Functions?
/*
1.Reuse the Code
2. To produce different Results by passing different arguments.
3. This will eleminate the need of rewriting the same code again and again.
*/

// Function expression
/* It means that we create a function and put it into a variable */
function sum2(a, b) {
  console.log(a + b);
}
var sumFunc = sum2(12, 6);
sumFunc;

// return keyword
/* Whenever JavaScript reaches tha return keyword, it will terminate the
execution of the statement
and value is returned back to the caller */

function sum3(a, b) {
  return a + b;
}
var sum3Func = sum3(2, 3);
console.log(sum3Func);

// Anonymous Function
/* It is same as of others but a function without a name is Anonymous Function*/

var funcSum4 = function (a, b) {
  return a + b;
};

console.log(funcSum4(4, 5));
// Or
var newSum = funcSum4(8, 5);
console.log(newSum);
