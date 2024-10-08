// Note : This is objects in javascripts not classes in js
// Objects: unordered collections of data or properties. 
//          Each of these properties is basically key and value pairs
// Data types: 1. Primitive: String, Boolean, Number, Undefined and Null
//             2. Non-Primitive: Objects

// Creation of objects in JS:
// 1. Using an object literal : let Student = {name: 'Akshay'}
// 2. Using the keyword ‘new’ : const student = new Object(); student.name = 'Michael';
// 3. Using constructor       : as given below
function Student(name, age, id) {
    this.name = name;
}
const student1 = new Student('Akshay');
const student2 = new Student("Darshana");
console.log(student1);
console.log(student2);
console.log("----------------------")
console.log("Accessing through Dot Operator")
console.log("Name: "+student1.name);

console.log("Accessing through Square brackets")
console.log("Name: "+student2['name']);
console.log("----------------------")
// But there are some instances in which you have no choice other than to use square brackets. 
// In these particular cases, using the dot operator will cause your code to throw an error.

// If the name of the key is a number and not a string:
let StudentPro = {
    name: 'Nita',
    20: 'twenty', // declare this parameter using the constructor
 }
//  console.log(StudentPro.20); // gives SyntaxError: missing ) after argument list
console.log(StudentPro['20']);
console.log("----------------------")
console.log("Existance of property")
console.log('gender' in Student);
console.log('name' in Student);
console.log("----------------------")
// METHODS
let StudentProMax = {
    name: "Akshay", // comma is mandatory
    speak: function(){
        console.log("Hi! I am "+this.name); // this is mandatory
    },
    study: function(){
        console.log("I study at 10 pm as I am night owl");
    },
    play: function(){
        console.log("I do play Table Tennis at 8:30 pm");
    }
}
StudentProMax.speak();
StudentProMax.play();
StudentProMax.study();
// Removing property of an object
delete StudentProMax.play; // 
// StudentProMax.play(); //TypeError: StudentProMax.play is not a function
console.log("----------------------")
console.log("Iteration of objects");
let StudentMaxProPlus = {
    name: 'Akshay',
    age: 15,
     id: 1001
    }
    for (key in StudentMaxProPlus) {
    console.log(`StudentMaxProPlus.${key} : ${StudentMaxProPlus[key]}`); // or can use hasOwnProperty()
    }