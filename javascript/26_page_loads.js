// There are three significant events in the lifecycle of an HTML page:

// 1. DOMContentLoaded: the browser has fully loaded HTML, and the DOM tree has been constructed, 
// but external resources such as images and stylesheets may not have yet loaded. 
// The handler can find DOM nodes and initialise the interface now that the DOM is ready.

// 2. load: HTML and all external resources such as graphics and styles are loaded. 
// External resources are loaded, allowing styles to be applied and picture sizes to be determined, 
// among other things.

// 3. beforeunload: the user is about to leave the page. The user is about to leave;
//  thus, we can see if they saved their modifications and inquire if they want to go.

// 4. unload: Although the user has almost left, 
// we can still perform some actions, such as sending out statistics.


// ------------------------------
// 1. DOMContentLoaded
{/* <script>
  function ready() {
    alert('DOM is ready');

    console.log('Logo has been loaded!!!');
  }

  document.addEventListener("DOMContentLoaded", ready);
</script>

<img id="img" src="logo.png"></img> */}
// It does not, however, wait for the image to load. As a result, the alert displays zero sizes.

// Note 1: Scripts When a browser encounters a <script> tag in an HTML document, it must execute it before proceeding to build the DOM. That’s a precaution, 
// as scripts may wish to edit DOM and even document.write into it. Thus DOMContentLoaded has to wait.
// As a result, DOMContentLoaded occurs after such scripts:
{/* <script>
  document.addEventListener("DOMContentLoaded", () => {
    alert("DOM is ready!");
  });
</script>

<script src="demo.js"></script>
  
<script>
    alert("Library is loaded and Inline Script has been executed");
</script> */}

// Note 2:Styles: DOMContentLoaded does not wait for external style sheets
//  because they do not affect the DOM.
// However, there is a glitch. If we have a script after the style,
//  then the script must wait till the stylesheet loads:

// <link type="text/css" rel="stylesheet" href="style.css">
// <script>
//    alert(getComputedStyle(document.body).marginTop);
// </script>

// This is because, in some cases, such as in the example above, the script may 
// need to obtain coordinates and other style-dependent properties of elements. 
// Thus, it must wait for styles to load.

// In the same way that DOMContentLoaded waits for scripts, it now also waits for styles.

// 2. window.onload : When the entire page, including styles, pictures, and other resources, is loaded, 
// the load event on the window object is triggered. The onload attribute provides access to this event.
{/* <script>
  window.onload = function() {
    alert('Page is loaded!!!');
        console.log('Logo has been loaded!!!');
      };
</script>
  
<img id="img" src="logo.png"></img> */}

// 3. window.onunload
// The unload event is triggered on the window when a visitor departs the page. 
// Anything we can do there is such that it doesn’t require a delay, such as 
// shutting relevant popup windows.
// Sending analytics is a significant exception.

// Let’s say we collect information about how the page is utilised, 
// such as mouse clicks, scrolls, and seen page areas.

// let analyticsData = { /* gathered data in the form of an object */ };

// window.onunload = (event) => {
//   navigator.sendBeacon("/analytics", JSON.stringify(analyticsData));
// });

// 4. window.onbeforeunload: 
// The beforeunload handler requests extra confirmation if a visitor navigates away from the website 
// or tries to dismiss the window.

// If we cancel the event, the visitor’s browser may ask if they are sure.

// You can test it out by running the following code and then refreshing the page:

// window.onbeforeunload = function() {
//   return false;
// };