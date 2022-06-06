// Combination of Operators and Operand is called Expression
//  Types of Operators:
/*
1. Assignment Operator
2. Arithmetic Operator
3. Comparison Operator
4. Logical Operator
5. String Operator
6. Conditional Operator
*/

// ASSIGNMENT OPERATOR
var x = 5;
var y = 5;
console.log("are they equal " + x == y);
// Here you'll get False because are they equal is added to x first then it is compared with y
//  will give False

console.log(`Are they Equal  ${x == y}`);
// It will give True

// ARITHMETIC OPERATOR
console.log(5 / 2);
console.log(5 % 2);

// Postfix Increment/decrement
var num = 1;
var newNum = num++;
console.log(newNum);
// It will increase the value of num but will return  the value before increment
console.log(num);
newNum += 2;
console.log(newNum);

// Prefix Increment/Decrement
var num2 = 5;
var newNum2 = ++num2;
console.log(num2);
console.log(newNum2);

// Comparison Operator

var a = 10;
var b = 20;
var c = 10;
console.log(a == b);
console.log(a != b);
console.log(a == c);

// Logical Operators
var a = 20;
var b = 30;
console.log(a > b && b > 0);
console.log(a > b || b > 0);
console.log(!(a > b || b > 0));

// String Operator (Concatenation)
var str1 = "Saqib ";
var str2 = "Ansari";
console.log(str1 + str2);

// Interview Question Swap number without Third Variable
var a = 10;
var b = 20;
a = a + b; /* 10+20=30 */
b = a - b; /*30-20=10 */
a = a - b; /*30-10=20 */
console.log("a is " + a);
console.log("b is " + b);

//  Interview qyestion
// Difference between == and === ?
var a = 5;
var b = "5";
console.log(a == b);
// It will give TRUE because it will check only value not Data Type

console.log(a === b);
// It will give FALSE because it will check not only value but also Data Type
