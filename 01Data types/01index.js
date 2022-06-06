/* Type of Data Types that are primitives:
1. undefined
2. number
3. string
4. boolean
5. bigint
6. symbol */
var myName = "Saqib";
console.log(typeof myName);
var myAge = 25;
console.log(typeof myAge);
var amISaqib = true;
console.log(typeof amISaqib);
// Here you can see that int + str = intstr , NO ERROR but Concatenation
console.log(10 + "20");
// what if you subtract, Multiply and Divide? It is a BUG
console.log(10 - "2");
console.log(10 * "2");
console.log(10 / "2");
// String + String = Concatenation
console.log("Saqib" + "Ansari");
console.log("Saqib " + "Ansari");
// What if I subtract Two Strings ? It will print NaN, Means that Not a Number
console.log("Saqib" - "Ansari");
// Let's do some stuffs with Boolean
console.log(true + true); /* true=1 , so, 1+1=2 */
console.log(true - true); /*1-1=0 */
console.log(true * true); /*1*1=1 */
console.log(false - true);

// first Interview Question
// What is the difference b/w null and undefined ?
var dustbin = null;
console.log(dustbin);
console.log(typeof dustbin); /* 2nd Bug which states that type is OBJECT */
var standBy;
console.log(standBy);
console.log(typeof standBy); /* type of this Data type is undefined */

// Second Interview Question
// What is NaN ?
console.log("saqin" - "ansari"); /*When we subtract two strings, we get NaN */
// It is a property of global object
// In other words, NaN is Not-a-Number
// Where can we use it?
var myNumber = 7988079726;
var myName = "Saqib";
console.log(isNaN(myNumber));
// False means that it is a number
console.log(isNaN(myName));
// It can be used to find if the number entered in the form is Phone Number or not
