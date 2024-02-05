// ? Strings Methods in JavaScript

//* length() method in js

let str = "AmanDeep Singh";
let str1 = "        Frontend Developer";

console.log("Length of String :", str.length);

//* CharAt() method in js

let char = str.charAt(0);
console.log("Character at Index :", char);

//* CharCodeAt() method in js
//! The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535)

let charCode = str.charCodeAt(0);
console.log("Character Code :", charCode);


//* at() method in js
//! It work like CharAt() method. But it has Different like it allow to take Negative Indexes while CharAt() method do not.

let atChar = str.at(-2);
console.log("Character At Position :", atChar);

//* Slice() method in js

let sliceStr = str.slice(1);
console.log(sliceStr);


//* SubString() method in js

let subString = str.substring(1);
console.log(subString);

//* toUpperCase() method in js

let upperCase = str.toUpperCase();
console.log(upperCase);

//* toLowerCase() method in js
let lowerCase = str.toLowerCase();
console.log(lowerCase);

//* Concat() method in js

let concat = str.concat(" ", str1);
console.log(concat);


//* trim() method in js

console.log("Before Trim:", str1);
let trim = str1.trim();
console.log("After Trim :", trim);

//* padStart() method in js

let num = 5;
let text = num.toString();

let padstart = text.padStart(2, "0");
let padend = text.padEnd(3, "2");
console.log(padstart);
console.log(padend);

//* repeat() method in js

let repeat = str.repeat(`3`);
console.log(repeat);

//* replace() method in js

let str2 = "Hi there, I am Backend Developer";
let replace = str2.replace("Backend", "Frontend");
console.log(replace);

//* split() method in js

let string = "Apple,Banana,Orange";

let split = string.split(",", 3);
console.log(split);

//* indexOf() method in js

let indexof = str2.indexOf("Backend2");
console.log(indexof);

//* lastindexOf() method in js
//& checks the last occurrence in the string

let lastindexof = str2.lastIndexOf("e");
console.log(lastindexof);

//* search() method in js

let search = str2.search("Backend");
console.log(search);

//* match() method in js

let match = str2.match("er");
console.log(match);

//* includes() method in js

let includes = str2.includes("Backend");
console.log(includes);


//* Number() Methods in js

let x = "123";
let y = 5.4394433;

// console.log(y.toFixed(3));  //& toFixed() method its convert number value into string rounding specified value.

console.log(parseInt(x));    //& parseInt() method parse string value into number value.


console.log(parseFloat(y));  //& parseFloat() method parse Floating string value into Floating number value.

console.log(isNaN("Hi"));
console.log(isNaN(12));

console.log(isFinite(x));















