// can return multiple data types
// function calculateVolume(len,ht,width){ //we don’t have to specify the datatype of the parameter
//     calculateVolume = len * ht * width;
// }

// console.log(calculateVolume(2,3,4)) TypeError: calculateVolume is not a function. Thus name of function and variable can't be same
// console.log(calculateVolume(12,13,14))

function calculateVolume(len,ht,width){
    volume = len * ht * width;
    if(volume>100) 
        return "Volume is "+volume
    return volume
}

console.log(calculateVolume(2,3,4)) 
console.log(calculateVolume(12,13,14))


// Functions as arrays
function confession(){ //The function can also access the parameters by making use of the array
    console.log("My name is: " + arguments[0] + " " + arguments[1] +" "+arguments[2]);
  }
  
  confession("I");
  confession("I", "Love");
  confession("I", "Love","You");

let cube = function(x){
    return x*x*x;
}
console.log("Cube of 3:"+cube(3))

//Inbuilt Functions in JavaScript
// charAt(index), concat(string), length(),strike() (Strikes through the given string.), Date()
let date = Date();
console.log(date);