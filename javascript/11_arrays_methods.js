// 1. of() method: his method will create an array instance of all the elements in the argument.
// Creating an array str with elements Be, a, Coding, Ninja
let str = Array.of("Be", "a", "Coding", "Ninja");

// Logging str
console.log(str); //[ 'Be', 'a', 'Coding', 'Ninja' ]
// 2. indexOf() method
// 3. forEach() method
// 4. join() method : to concatenate all the elements of a single array
// Creating array along with elements.
const arr = ["Be", "a", "Coding", "Ninja"];

// Writing the answer function
const answer = arr.join(" ");  

// Logging the answer
console.log(answer); //Be a Coding Ninja

// 5. map() method
// Creating array along with elements.
const arr1 = [1800, 123, 3598];

// Writing the answer function
const ans = arr1.map(x => x - 100) ;

// Logging the answer
console.log(ans); //[ 1700, 23, 3498 ]

// 6. flat() method: flatten the depth of the array to a specific limit, which has the default value of 1. 
// Creating 3-D array along with elements.
const arr2 = [[1800], [123], [3598]];

// Writing the answer function
const ans2 = arr2.flat() ;

// Logging the answer and the original array
console.log("Original Array :");
console.log(arr2) ;
console.log("New Array : ") ;
console.log(ans2) ;

// 7. filter() method:
// Creating array along with elements.
const arr3 = ["Be", "a", "Coding", "Ninja"];

// Writing the answer function
const answer3 = arr3.filter(arr => arr.length > 4);  

// Logging the Original and the new array
console.log("Original Array :");
console.log(arr3) ;
console.log("New Array : ") ;
console.log(answer3) ; // [ 'Coding', 'Ninja' ]