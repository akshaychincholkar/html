// By using this property, we can check the name of our function. The name assigning logic is pretty intelligent in JavaScript. If you created a function without a name,
// the name is assigned to that function and then printed on the console.
// We can check the name of any function by using the “.name” property.

function sayHello(){
    console.log("Hello!");
}

console.log(sayHello.name)
console.log(sayHello.length) // number of args

// 3. Custom properties
// If we want, we can add our custom properties also. But the critical point here 
// is that a function property with the name “callingnumber” 
// and a local variable with the name “callingnumber” are two different and unrelated things.  
function myFun() {
    console.log("JavaScript is fun.");
    
    myFun.callingnumber++;
  }
  myFun.callingnumber = 0; 
  
  myFun();
  console.log( `myFun is Called ${myFun.callingnumber} times.` ); 

  //4. NFE: The function expressions with a name are represented by NFE, a short form for Named Function Expression.
  let myFun = function func1(place) { // we assigned func1 name to function

    console.log(`currently, we are in, ${place}`);
  };
  
  myFun("Delhi");

  // 5. IIFE:  stands for Immediately Invoked Function Expression. 
//   This type of function runs as soon as we define it.

// (function () {..........})();