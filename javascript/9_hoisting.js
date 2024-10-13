// var hoisting:
// Hoisting is an interesting feature of javascript. 
// Using hoisting, the variables and functions are moved to the top and are executed at the beginning of code execution. 
// Follow the below example for better clarity:


console.log("temp:"+temp);
var temp="This the temp variable";

// It will be intepreted as :
// var temp;
//     console.log(temp); // temp is undefined
//     temp = "This the temp variable"

//**********************************************************
// Hoisting of let
// Like var, let variable declarations are also notched at the top. But, 
// as in var the variables are initialized with undefined, the let variables are not initialized. 
// So, if you try to print the variables before assigning value, you will get a reference error.

// console.log("temp1:"+temp1) //ReferenceError: Cannot access 'temp1' before initialization
// let temp1 = "This the let temp variable"

//**********************************************************
// Hoisting of const
// The const variable also gets notched at the top just like var and let but it is not initialized. 
// console.log("temp2:"+temp2)
// const temp2 = 3; //ReferenceError: Cannot access 'temp2' before initialization