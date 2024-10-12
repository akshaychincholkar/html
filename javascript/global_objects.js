// The global object in Javascript contains variables and functions that are accessible from anywhere. 
// These are incorporated into the language or environment by default. 

// However, other objects in the global scope are either created by the user script or provided by 
// the host application. 

// The global object is known as the window object in a web browser; however, in Node.js, 
// it is known as global. 

// Any global functions and variables declared with var (not let/const) 
// can be accessed as properties of the window object.

var carName = "Volvo";
// code here can use window.carName

let carName = "Volvo";
// code here can not use window.carName

// Warning
// Do NOT create global variables unless you intend to.

// Your global variables (or functions) can overwrite window variables (or functions).
// Any function, including the window object, can overwrite your global variables and functions.