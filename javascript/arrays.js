// Arrays: group of items with the same data types.
// 1. Literal: Creating an array using array literal
// 2. new Array(): Creating instance of Array directly (using new keyword)
// 3. Constructor: Using an Array constructor (using new keyword)

let names = ["Akshay","Darshana","Chincholkar"]
console.log(names)

let cities = new Array();
console.log(cities); // []
// console.log(cities[0]); //undefined
cities[0]="Mumbai";
cities[1] = "Amravati";
cities[2] = "Pune";
console.log(cities)

let numbers = new Array(1,2,3,4,5);
console.log(numbers);