// Strings: Characters or sequences of characters in JavaScript are stored as strings
// Immutability: In Javascript, strings are immutable, i.e., the characters cannot be changed in Js. 

let str = 'Name';
str[0] = 'n'; // will not change anything
console.log( str[0] ); // N

// Quotes:
// single quotes
// double quotes
// backticks

//Accessing the characters:
let str1 = `Name`;

console.log( str1[0] ); // the first character is N
console.log( str1.charAt(0) ); //the first character is N

console.log( str1[str1.length - 1] ); //the last character is e