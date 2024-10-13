// const result = async () => {
//     try{
//         const response = await fetch("https://www.google.com/");
//         const data = await response.json();
//         return data;
//     }catch(error){
//         console.log("Error:"+error);
//     }
// }
// console.log(result())
// const result2 = () => {
//     try{
//         const response = fetch("https://www.google.com/");
//         const data = response.json();
//         return data;
//     }catch(error){
//         console.log("Error:"+error);
//     }
// }
// console.log(result2())

// Async with promise
function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }
  
//   asyncCall(); // uncomment to test


  // Good example
  // 1. Sequential start
function resolveAfter2Seconds() {
    console.log("starting slow promise");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("slow");
        console.log("slow promise is done");
      }, 5000);
    });
  }
  
  function resolveAfter1Second() {
    console.log("starting fast promise");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("fast");
        console.log("fast promise is done");
      }, 1000);
    });
  }
  
  async function sequentialStart() {
    console.log("== sequentialStart starts ==");
  
    // 1. Start a timer, log after it's done
    const slow = resolveAfter2Seconds();
    console.log(await slow);
  
    // 2. Start the next timer after waiting for the previous one
    const fast = resolveAfter1Second();
    console.log(await fast);
  
    console.log("== sequentialStart done ==");
  }

//   sequentialStart(); uncomment to test

  // 2. Sequential wait.
  async function sequentialWait() {
    console.log("== sequentialWait starts ==");
  
    // 1. Start two timers without waiting for each other
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();
  
    // 2. Wait for the slow timer to complete, and then log the result
    console.log(await slow);
    // 3. Wait for the fast timer to complete, and then log the result
    console.log(await fast);
  
    console.log("== sequentialWait done ==");
  }
//   sequentialWait(); // uncomment to test

  // 3. Concurrent type 1
  async function concurrent1() {
    console.log("== concurrent1 starts ==");
  
    // 1. Start two timers concurrently and wait for both to complete
    const results = await Promise.all([
      resolveAfter2Seconds(),
      resolveAfter1Second(),
    ]);
    // 2. Log the results together
    console.log(results[0]);
    console.log(results[1]);
  
    console.log("== concurrent1 done ==");
  }

//   concurrent1() // uncomment to test

  // 4. Concurrent type 2
  async function concurrent2() {
    console.log("== concurrent2 starts ==");
  
    // 1. Start two timers concurrently, log immediately after each one is done
    await Promise.all([
      (async () => console.log(await resolveAfter2Seconds()))(),
      (async () => console.log(await resolveAfter1Second()))(),
    ]);
    console.log("== concurrent2 done ==");
  }
  concurrent2() //uncomment to test