// Callbacks, usually used for asynchronous actions, are functions passed into some other functions as 
// arguments to be executed later (as required by asynchronous actions).
// Some JavaScript functions that let us schedule asynchronous actions are setTimeout, loadScript, etc.

// function loadScript(scr1)
// {
//   let script = document.createElement('script');
//   script.scr1 = scr1;
//   document.head.append(script);
// }

// The function can be used as loadScript(...). Since the execution will happen after the function finishes, 
// any code below loadScript() will not wait for the script loading to finish. 
// This means that declaring and running new functions below would not be possible

// loadScript('/my/script.js');

// It would be helpful to find out when the script finally runs to use new variables and 
// functions from the script. Therefore, we will add a callback function as an argument to loadScript(), 
// which will execute when the script will load. 
// To call new functions from the script, we will now write those in the callback itself.

// https://www.programiz.com/javascript/callback

function greet1(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet1('Akshay', callMe);
console.log("-----------------------")
// example 2:
//  program that shows the delay in execution

function greet() {
    console.log('Hello Everyone');
    console.log("-----------------------")
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 2000); // inbuilt call back function
sayName('Darshana');


// Using the callback function passing arguments
// Callback Function Example
function greet2(name, myFunction) {

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
    console.log('Hello Everyone');
    console.log("-----------------------")
}

// callback function
function sayName2(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 5 seconds
setTimeout(greet2, 5000, 'Akshay', sayName2); // passing the name and the name of the function as args