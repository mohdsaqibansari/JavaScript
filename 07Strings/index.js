// String: It is a collection of Characters.

// length()
let myName = "Saqib Ansari";
console.log(myName.length);

// Escape Character
let mySentence = 'I am a Machine Learning "Enthusiast".';
console.log(mySentence);

// indexOf(): It will find String in a String and returns the index of first letter of the string tht you entered.
// It search from left to Right
const myData = "I am a Machine Learning Student";
console.log(myData.indexOf("Mach"));
console.log(myData.indexOf("a", 10));

// lastIndexOf(): It searches from right to left
console.log(myData.lastIndexOf("a"));
console.log(myData.lastIndexOf("ea"));

// Extracting String Parts
/*We have 3 methods to extract part of the string:
1. slice(start,end)
2. substring(start,end) 
3. substr(start,length)*/

// slice(): It will  extract a part of the string nd return it back as a new string
var str = "Apple, Banana, Grapes";
let result = str.slice(7, -1);
console.log(result);

// ques. Display only 280 Characters
let myString =
  "avshjsgcsd c hdducvbd awd dhdduisbcyuizsgwjagsuwgausgagsgahgsags shuahsuahsuawhusha shguasguagsugaus sguagsuagugawgdu sgusguawgsuaguga guagduagsgugsaudgdgvcuizv chdvcyuzvcyzdvsdyc bcduisvizcyudsvcd dbcdusuvcyd c dhvuisvyduisvdyscx  dhviydvsd dftewfdtwdt fvddtyuwvtdtyvdweid vfuvxtexwxcetoxve xyvewtfxdfdecxdeydiw xveuiwoubcwf; lws xgdeyvxyf;e xwxbyiewvxyyvi;xv";
const myString280 = myString.slice(0, 280);
console.log(myString.length);
console.log(myString280.length);

// Substring():It is similar to slice()
/*But it can not accept negative indexes.
If we give negative value then it will count from oth index 
example: substring(2,-2) will give 0th to 2nd(exclusive) */

var str2 = "Apple,Banana,Grapes";
let resStr2 = str2.substring(2, -1);
console.log(resStr2);

// substr(): It is similar to slice()
/* But the 2nd Parameter specifies the Length of Extracted Part. */
var str3 = "Apple,Banana,Grapes";
let resStr3 = str3.substr(0, 4);
let resStr32 = str3.substr(-4); //It will give last 4 index data
console.log(resStr32);
console.log(resStr3);

// replace(replace data, replace data with):It will replace data with another data but
// It will replace only one data(First Matched Data) not other data.
let myBio = `I am Saqib Ansari, M.Tech Student`;
let replaceBio = myBio.replace("M.Tech", "PhD");
console.log(replaceBio);

/*Extracting String Characters
1. charAt(position)
2.charCodeAt(position)
3. Property access[] */

// charAt():It returns the character at a specified Index in a strin

let myName2 = "Saqib";
console.log(myName2.charAt(4));

// charCodeAt():It will return a UTF-16 Code from 0 to 65535
console.log(myName2.charCodeAt(4));

// Ques. Find the Code of last Character
console.log(myName2.charCodeAt(myName2.length - 1));

// Property Access []
console.log(myName2[2]);

// Other Useful Cases

let myName3 = "saqib Ansari";
console.log(myName3.toLowerCase());
console.log(myName3.toUpperCase());

// concat()
let fName = "Saqib";
let lName = "Ansari";
console.log(fName.concat(" ", lName));

// trim():It will remove spaces from left side and right side only

let spaceMsg = "    I am Saqib     ";
console.log(spaceMsg.trim());

//split(): It convert a String into Array on the basis of commas, spaces, pipe
let myArr = "1,2,3,4,5,6,7";
let myArr2 = "1 2 3 4 5 6";
let myArr3 = "1|2|3|4|5";
console.log(myArr.split(",")); //It will split array whenever it encounters ","
console.log(myArr2.split(" ")); //It will split array whenever it encounters " "
console.log(myArr3.split("|")); //It will split array whenever it encounters "|"
