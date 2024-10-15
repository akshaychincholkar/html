// An event loop in JavaScript is a process that allows the program to handle multiple tasks, 
// like running code, collecting events, and executing queued tasks, without blocking the main thread. 
// It continuously checks the call stack and the task queue, ensuring that tasks like user interactions 
// or fetching data are processed efficiently, even if some tasks take longer to complete. 
// This process helps JavaScript manage asynchronous operations, making the code responsive and smooth.


// All actions in JS are performed on a single thread. 
// However, we can give the appearance of multi-threading by employing a few clever data structures.

// A script is executed by the JavaScript engine, 
// starting at the top of the file and working its way down. In the execution phase, 
// it constructs execution contexts and pushes and pops functions onto and off the call stack.

// If a function takes a long time to perform, you won't be able to interact with the web browser 
// while it's running since the page will hang. 
// The term "blocking function" refers to a function that takes a long time to perform.


// Working of Event Loop:

// 1. Execution Stack: JavaScript runs functions one at a time. When a function starts, 
// it goes on the stack. Once it finishes, it leaves the stack.
 
// 2. Callback Queue: Some tasks, like user clicks or data fetching, wait in the callback queue. 
// They are ready to run but have to wait until the stack is empty.
 
// 3. Event Loop Process: The event loop checks if the stack is empty. If it is, 
// the event loop takes the first task from the callback queue and runs it.
 
// 4. Non-Blocking Operations: JavaScript can continue doing other things while waiting for tasks 
// like fetching data. When these tasks finish, their callbacks go to the callback queue to run when the 
// stack is clear.
 
// 5. Continuous Cycle: The event loop keeps running in a loop, checking the stack and the callback queue 
// to make sure tasks are done in the right order.

// console.log('Welcome Reader!');
// setTimeout(() => {
//     console.log('Execute it immediately.');
// }, 1);
// console.log('Bye Reader!');
console.log("------------------------")
console.log('Start!');
setTimeout(() => {
    console.log('Execute it immediately.');
}, 0);
console.log('End!');

// Because the timeout, in this case, is 0 seconds, the message 'Execute it immediately.'
//  should show before the message 'End!' .That is not the case.

// When the call stack is empty, the JavaScript engine places the following 
// function call on the callback queue and runs it. 
// In other words, it is executed by the JavaScript engine after console.log('End!').

// a. Micro tasks within an Event Loop
// A micro-task is a function performed after the operation or programme that produced it has exited 
// and only if the JavaScript execution stack is empty, but before the user agent returns control to the 
// event loop that drives the script's execution environment. A micro-task has the ability to en-queue 
// other micro-tasks.

// Micro-tasks are frequently scheduled for tasks that must be accomplished shortly after the current 
// script is completed. The event loop moves on to the micro-task queue after completing one macro-task.
// The event loop will not move on to the next task outside of the micro-task queue until all of the tasks 
// in the micro-task queue have been finished. This indicates that the micro-task queue is more crucial.

// Mutation observer callbacks and promise callbacks are examples of micro-tasks.


// b. Macro tasks within an Event Loop
// A macro-task is a separate and independent piece of work. The JavaScript code is always executed here, 
// and the micro-task queue is always empty. 

// The macro task queue is typically considered the task queue or the event queue.

// But the task queue is used for synchronous statements, whereas the macro-task queue is utilised 
// for asynchronous statements.

// No code in JavaScript is allowed to run until an event has occurred. It's worth noting that the 
// execution of JavaScript code is a macro-task in and of itself.
