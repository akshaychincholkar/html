
// var a = 10
// function test(){
//     var b = 20
//     console.log("a:"+a)
//     console.log("b:"+b)
// }
// test()
// console.log(a)
// console.log(b)
// Thus it will give : ReferenceError: b is not defined

// *****************************************************
// redeclaration of the var
// var a = 10
// console.log(a+" before redeclaration")
// function func(){
//     var a = 20 
//     console.log(a+" after redeclaration")
// }
// func()
// a = 30 
// console.log(a+" after update")
// var a = 40
// console.log(a+" after redeclaration at global level")
// Thus, let can be updated but not re-declared.

// *****************************************************
// redeclaration of the let
// let a = 10
// console.log(a+" before redeclaration")
// function func(){
//     let a = 20 
//     console.log(a+" after redeclaration")
// }
// func()
// a = 30 
// console.log(a+" after update")
// let a = 40 //Cannot redeclare block-scoped variable 

// *****************************************************
// // Function scope and block scope
// function func(){
//     if(true){
//         var a = "one";
//         let b = "two";
//         const c = "three";  
//         console.log("a:"+a+" b:"+b+" c:"+c);
//     }

//     console.log("a:"+a)
//     console.log("b:"+b) // b is not defined
//     console.log("c:"+c) // c is not defined 
// }
// func()
// U SIR - Scope, Redeclaration, Updation and Initialization
// *****************************************************
// looping value outside the loop
// for(var i = 0 ; i < 5 ; i++) {
//     console.log(i);
//  }
//  // i is printed when outside the block
//  console.log(i); 
// *****************************************************
// now let us see the behaviour in block scope of let
// for (let i = 0; i < 5; i++) {
//     console.log(i);
//    }
//    console.log(i); //ReferenceError: i is not defined

// *****************************************************
// const - cannot be re-declared or updated must be initialized at the time of declaration, else error occurs.
// // const a ; //'const' declarations must be initialized.
// const a = 10;
// a = 40; //TypeError: Assignment to constant variable.
// // const a = 50; //Cannot redeclare block-scoped variable 'a'.ts(2451)
// function func(){
//     const a = 5;
// }
// console.log("a:"+a); // ReferenceError: a is not defined 

// *****************************************************
// // const on objects
// const student = {
//     name: "Akshay Chincholkar",
//     age: 30
// }
// console.log(student)
// student.age = 33;
// console.log(student)
// student = {
//     name: "Darshana Patil",
//     age: 31
// }
// console.log(student) //TypeError: Assignment to constant variable.

// *****************************************************
// DATA TYPES
// // Number : integer / float. Special values: infinity, -infinity and NaN
// let a = 1;
// let b = 2.1;
// let c = 3/0;
// let d = 0/4;
// let e = "number"/5;
// let f = Infinity
// console.log(a)
// console.log(b)
// console.log(c)// Infinity
// console.log(d)// 0
// console.log(e)// NaN
// console.log(f)

// *****************************************************
// // BigInt : values larger than (253 - 1) or less than -(253 - 1) appended by 'n'
// //
// // n indicates it's a BigInt
// const a = 1234567890123456789012345678901234567890n;
// // Note: Currently, BigInt is supported in most browsers like Chrome, Firefox, Safari, etc., but not in Internet Explorer.
// console.log(a)

// *****************************************************
// // String : Double and single quotes are simple quotes with the same functionality. 
// // double quotes
// const role = "Employee"
// // single quotes
// const institution = 'Google';
// // backticks
// const result = `${role} at ${institution}`;
// console.log(result)
// // Note: In JavaScript, there is no character data type. A string may be of zero characters, one character, or many of them.

// *****************************************************
// // boolean :  two values: true and false
// let luck = true;
// if (luck){
//     console.log("I am Lucky!!")
// }

// *****************************************************
// // null: absence of any value
// Example 
// let name = null;
// console.log(name); // null 

// *****************************************************
// // undefined : declared but not assigned. It is possible to assign undefined to a variable explicitly. 
// // However, in a usual scenario, null is assigned to an unknown variable. 
// // And undefined is reserved as an initial default value for unassigned variables.
// let name = undefined;
// console.log(name) //undefined
// name = "Akshay"
// console.log(name) // Akshay
// name = undefined
// console.log(name) //undefined

// *****************************************************
// Objects: An object is a value in the memory which is possibly referenced by an identifier. 
// It is an entity having a state and behavior. 
// As mentioned above, an object is a non-primitive data type and must be created by the programmer.
let student = {
    name :"Akshay Chincholkar",
    age: 30
}
console.log(student)

// Signal(): The symbol is a unique and immutable data type introduced in ES6.
//  They are created using the factory function Symbol().
//  Every time the factory function is called, it is guaranteed that a new and unique symbol is created. 
let employee = {
    emp_no : Symbol(),
    name :"Akshay Chincholkar",
    age: 30
}

console.log(employee)