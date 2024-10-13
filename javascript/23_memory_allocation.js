// 1. Allocation
// 2. Use
// 3. Free
    // a. Reference-counting garbage collection
    // b. Mark-and-sweep algorithm
// 1. Allocation:
// By initialization

// var n = 3; // allocates memory for a number
// var s = 'string'; // allocates memory for a string

// var obj = {
//   a: 1,
//   b: null
// }; // allocates memory for an object

// var a = [2,'text',5]; // allocates memory for an array

// function fun(x) {
//   return x;
// } // allocates a function,callable object



// // function expressions also allocate an object
// someElement.addEventListener('click', () =>{
//   someElement.style.backgroundColor = 'blue';
// }, false);
// // Allocation by function calls

// var d = new Date(); // a Date object allocated

// var elm = document.createElement('div'); // allocates a DOM element
// var s1 = 'string';
// var s2 = s1.substr(0, 4); // s2 is a new string
//                         //  to store the [0, 4] range of s1.

// 2. Using the memory
// 3. Freeing the memory: Most memory management issues occur, freeing allocated memory when 
// the allocated memory is no longer needed as javascript uses a form of automatic memory 
// management known as garbage collection.



// a. reference-counting
// It is a naive garbage collection algorithm. This algorithm looks for those objects which have no reference 
// left. An object becomes part of garbage collection if it has no references attached to it, i.e., 
// it is unreachable.

var obj1 = {
    a: {
        b: 10
    }
  };
      // 2 objects are created. ‘a’ is referenced by obj1 as one of its properties.
    // So, none can be garbage-collected.
  
  var obj2 = obj1;      // The 'obj2' variable is the second thing that has a reference to the object.
  
  obj1= 1;          // the object that was originally in 'obj1' has a unique reference ob,j2
                        //   embodied by the 'obj2' variable.
  
  var x = obj2.a;    // reference to 'a' property of the object.
                            //   This object now has 2 references:  //one as a property and the other as the 'x' variable.
  
  obj2= 'text';  // The object that was originally in 'obj1' has now                     
                    //  zero references to it. So, it can be garbage-collected.
                  //   However its 'a' property is still referenced                              //by   the 'x' variable, so its memory cannot be freed.
  
  x = null;       // The 'a' property of the object originally in 
                  // obj1  has zero references to it. It can be garbage collected.

//   Limitation
//   The garbage collection algorithm fails in the case of circular references. 
//   Let’s visualize this through an example.

function fun() {
    var obj1 = {
        property1 : {
            subproperty1: 10
        }
    };
    var obj2 = obj1.property1;
    obj2.property1 = obj1;
    return 'any text';
}
fun();
// Here, the reference-counting algorithm does not remove obj1 and obj2 from memory after the function call.
//  Both the objects are referenced by each other, resulting in neither of them marked for garbage collection.

// b. Mark-and-sweep algorithm
// This algorithm searches for the objects which are unreachable from the root, which is JavaScript’s 
// global object. This algorithm overcomes the limitations of the Reference-counting algorithm. 
// An object with no references would be unreachable, but instead of having reference, if it is unreachable 
// from the root object, then the object is also part of garbage collection.

 

// This algorithm starts from the root object and finds all objects that can be reached from this root, 
// all objects referenced from these, etc. The garbage collector will thus find all reachable objects 
// and collect all non-reachable objects from the root. So all the objects that were unreachable to the root, 
// initiating as garbage collection, and later the memory is freed removing those objects. 
// Let’s understand this by looking at the following instance.

var obj1 = {
    property1: 35
}

// ROOT <object> => obj1 <object> => <object> property1:35

obj1 = null;
// ROOT <object> => obj1 <null> | <object> property1:35 (not reachable)