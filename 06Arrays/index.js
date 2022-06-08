// Array is a collection of data(can be string, number, bool in a single array) which we can store in a single class called Array
var names = ["saqib", "mahesh", "rishabh", "aasim"];

// Traversal in Array
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
// To get last Element from the Array
console.log(names[names.length - 1]);

// For-in Loop:It gives index
for (let items in names) {
  console.log(names[items]);
}

// For-Of Loop: It gives Items
for (let items of names) {
  console.log(items);
}

// For-Each Loop: It will give Element as well as Index
names.forEach(function (item, index, array) {
  console.log(item + " " + index + " " + array);
});

console.log("------------------");
// With the Help of Arrow Function
names.forEach((item, index, array) => {
  console.log(item + " " + index + " " + array);
});

// SEARCHING and FILTER in ARRAY

// indexOf()
const arr = [1, 2, 3, 4, 4, 3, 3, 6, 8, 6];
console.log(arr.indexOf(3, 6));
// indexOf() searches from left to right and gives the index of the element and
// if not found then gives -1
console.log(arr.lastIndexOf(4));
// lastIndexOf() searches from Right to Left and gives the index of the element and
// if not found gives -1

// includes(): It will give you Boolean value if the element is present or not
console.log(arr.includes(41));

// find(): It will give you the element from the array using some condition:
// like if element > 100 then return this.
// Only problem is that it will return only one element
// And if the condition is not TRUE then it will return undefined.

const item = [100, 200, 300, 400, 500, 600];
const findElement = item.find((element) => {
  return element < 300;
});
console.log(findElement); /* It will give 100 */

// findIndex(): It will give you the Index from the array using some condition:
// like if element > 100 then return its Index.
// Only problem is that it will return only index of one element.
// And if the condition is not TRUE then it will return -1
const index = item.findIndex((index) => {
  return index > 100;
});
console.log(index);

// filter(): It returns a new array containing all the elements
// Provided  Condition is TRUE
// condition is not True then it will return an EMPTY array

const filter = item.filter((item) => {
  return item > 300;
});
console.log(filter);

// sort(): It will provide Ascending Order Array
const num = [1, 5, 2, 7, 3, 6, 0, 9, 4, 15, 11];
console.log(num.sort());
// It will give this [
/* [0, 1, 11, 15, 2,
  3, 4,  5,  6, 7,
  9] because sort method used to sort according to the string not as numbers
   */

// push(): It will add an element at the end of the Array and
// It will return the length of the new array

const animals = ["hen", "dog", "cat", "cow"];
const newAnimal = animals.push("horse", "fish");
console.log(newAnimal);
console.log(animals);

/* unshift(): It will add the element at the start of the array and
it will return the length of the new array */
const count = animals.unshift("human", "Crow");
console.log(count);
console.log(animals);

/*pop():It will removes the last element from array
and return it */
console.log(animals.pop());
console.log(animals);

/*shift():It will removes the first element from array
and return it */
console.log(animals.shift());
console.log(animals);

/*splice():It add/remove elements from ARRAY and return it back when deleted */
const months = ["Jan", "Mar", "Apr", "Jun"];

//ques.  Add Dec at the end of the array
const newMonth = months.splice(months.length, 0, "Dec");
console.log(months);
console.log(newMonth); /*Since No. of Deleted Elements =0 ,so, 
an Empty Array we will get.*/

// ques. update mar to March
const indexOfMonths = months.indexOf("Mar");
if (indexOfMonths != -1) {
  const updateMonths = months.splice(indexOfMonths, 1, "March");
  console.log(updateMonths);
  console.log(months);
} else {
  console.log("No Such Element is Present");
}

// If you want to delete all the elements after a particular Element
const deleteMonths = months.splice(indexOfMonths, Infinity);
console.log(months);

// map(): It is similar to for-each but it returns in form of Boolean
// And it will not alter the original array like in case of For-Each .

const array1 = [1, 4, 9, 16, 25];
// num>9
let newArr = array1.map((item, index, array) => {
  return item > 9;
});
console.log(array1);
console.log(newArr); /* A boolean array will be found */

let newArr1 = array1.map((item, index, array) => {
  return `Item at Index ${index} is ${item} of the array ${array}`;
});
console.log(newArr1);

let newArrFor = array1.forEach((item, index, array) => {
  return `Item at Index ${index} is ${item} of the array ${array}`;
});
console.log(
  newArrFor
); /*It will return Undefiend whereas map() returns a new array with transformed
Elements
Due to this we can't do chainable methods like .sort() then .filter etc because
forEach returns Undefined and map returns a new array. */

// Ques. find Square Root of Each Element in the array
let arrNum = [25, 36, 49, 64, 81];
const sqrtNum = arrNum.map((item, index, array) => {
  return `Square Root of ${item} is : ${Math.sqrt(item)}`;
});
console.log(sqrtNum);

// Ques. Multiply Each Element by 2 the return those which are greater than 10
let arrNum2 = [2, 3, 4, 6, 8];
const mulNum = arrNum2
  .map((item, index, array) => {
    return item * 2;
  })
  .filter((item) => {
    return item > 10;
  });
console.log(mulNum);

// reduce(): It flattens an array to convert 3d or 2d array into  1d Array
/*It takes 4 Arguments:
1 Accumulator
2 Item
3 Index
4 Array
It is used when we have to find sum,average,product of all the elements */

let arr3 = [5, 6, 2];
let sum = arr3.reduce((accumulator, item, index, array) => {
  return (accumulator += item);
});
console.log(sum);

// Suppose you have some initial value of sum that you want to add in the sum oof the arr3

let newSum = arr3.reduce((accumulator, item, index, array) => {
  return (accumulator += item);
}, 7); /*Here 7 is the initial value that we can Assign */
console.log(newSum);
