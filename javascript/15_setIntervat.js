// There are several cases in which a coder might choose to delay the execution of a 
// function rather than call it immediately. This type of action is referred to as scheduling a call in JS.

// 1. Using the javascript setTimeout() method enables us to execute a method once after the interval.
 
// 2. Using the javascript setInterval() method, With the help of setInterval, 
// we can run a function repeatedly, beginning after the interval and repeating continuously at the 
// given time.
// syntax:
// const timerId = setInterval(function, [interval], [arg1], [arg2], ...)
setInterval(function() {console.log("Hello Ninja");}, 2000);

// digital clock
id = setInterval(()=>console.log(new Date()),1000);
clearInterval(id)

// Garbage Collection?
// Until the javascript clearInterval() method is invoked, the setInterval() function remains in memory.

// Applications:
// Animations: It can be made by repeatedly changing an element's position, size, or colour on a webpage 
// using the setInterval() function.
 
// Real-time data updates: The setInterval() function can be used to periodically fetch data from a server 
// or API and update the application's user interface (UI) with the new information.
 
// Timer countdowns: setInterval() can be used to decrement a timer countdown that is displayed on a webpage 
// at regular intervals until it reaches zero.
 
// Chat programmes: setInterval() can be used to periodically check for new messages in a chat programme and 
// update the UI with them.
 
// Games: The setInterval() function can be used to move objects, detect collisions, and repeatedly update the
//  game state.
 
// Audio and video players' progress bars can be updated at predetermined intervals by using the setInterval() 
// function.
 
// Automatic slide shows: By repeatedly changing the displayed image after a predetermined interval, 
// setInterval() can be used to create automatic slide shows on a webpage.
 
