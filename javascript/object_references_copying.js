// why can’t we simply use the (=) operator to copy the objects? 
// Objects in JavaScript are reference types. 
// And reference types don't hold values, they are a pointer to the value in memory. 
// When we try to copy the object with the help of the assign(=) operator, 
// we don’t create a new object. 
// The assignment operator simply assigns the address of the previous object to a new variable.

let obj1 = {
    "name":"Akshay",
    "marks":99
}
let obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj2.marks = 100
console.log(obj1);
console.log(obj2);

// Thus inorder to copy the object by value, there are three ways:
// 1. using Object.assign()
// 2. using {...obj}
// 3. using JSON.parse(JSON.stringify())
console.log("----------------------------------")
console.log("Copy object using Object.assign()")
let obj3 = {"name":"Akshay"};
// let obj4 = Object.assign(obj3); // this is wrong one, it down shallow copy
let obj4 = Object.assign({},obj3); // this is right one, deep copy

console.log(obj3);
console.log(obj4);
obj3.name = "Darshana"
console.log(obj3);
console.log(obj4);

console.log("----------------------------------")
console.log("Copy object using {...obj}")
let obj5 = {"name":"Akshay"};
let obj6 = {...obj5};
console.log(obj5);
console.log(obj6);
obj5.name="Darshana";
console.log(obj5);
console.log(obj6);

console.log("----------------------------------")
console.log("Copy object using JSON.parse(JSON.stringify())")
let obj7 = {"name":"Akshay"};
let obj8 = JSON.parse(JSON.stringify(obj7));
console.log(obj7);
console.log(obj8);
obj8.name = "Darshana";
console.log(obj7);
console.log(obj8);