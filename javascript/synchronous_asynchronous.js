// Asynchronous JavaScript is the programming method where operations are run independently 
//          allowing the program to continue running while waiting for certain tasks to complete. 
// Synchronous JavaScript is the programming approach where tasks of a program are executed 
//          sequentially one at a time.
// Synchronous JS
function f1(){
    console.log("it is my 1st function");
  }
  
  function f2(){
    console.log("it is my 2nd function");
    f1();
  }
  
  f2();
  console.log("----------------------")

  // Asynchronous JS
//   Program codes that access or fetch some resource from a server, such as fetching 
//   a file from the network, accessing a database and returning data from it, 
//   accessing a video stream from a webcam, or executing a function with a delay, 
//   the result of such operations may take a longer time to execute. 
//   This may result in the javascript engine to halt the execution of the other 
//   succeeding code block. Hence for the javascript engine to manage things a bit more 
//   efficiently an asynchronous programming method is used.
function counter(){
    let i = 0;
    setTimeout(()=>{
        console.log("Hello ")
        console.log("Sorry, I heard now")
    },3000);
}
console.log("Say Hello!");
counter();
console.log("Say Hello Please...");

// As shown above, Asynchronous in JavaScript refers to the execution of code in a
//  non-blocking manner. It allows tasks to be performed independently, enabling the 
//  program to continue running while waiting for certain tasks, such as data retrieval
//   or network requests, to complete. Asynchronous code makes use of callbacks, promises, 
//   or async/await to handle the results of these tasks once they are finished.

