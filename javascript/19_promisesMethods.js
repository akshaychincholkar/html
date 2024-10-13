// FAR -> FA^3R^3
// finally,all,allSettled,any,race,resolve,reject

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  });
//   1. Already fulfilled, if the iterable passed is empty.
//   2. Asynchronously fulfilled, when all the promises in the given iterable fulfill. 
//   The fulfillment value is an array of fulfillment values, in the order of the promises passed, 
//   regardless of completion order. If the iterable passed is non-empty but contains no pending promises, 
//   the returned promise is still asynchronously (instead of synchronously) fulfilled.
//   3. Asynchronously rejected, when any of the promises in the given iterable rejects. 
//   The rejection reason is the rejection reason of the first promise that was rejected.

console.log("************************************************")
// // All values are non-promises, so the returned promise gets fulfilled
// const p = Promise.all([1, 2, 3]).catch((err)=>{console.log(err)});
// // The only input promise is already fulfilled,
// // so the returned promise gets fulfilled
// const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]).catch((err)=>{console.log(err)});
// // One (and the only) input promise is rejected,
// // so the returned promise gets rejected
// const p3 = Promise.all([1, 2, 3, Promise.reject(555)]).catch((err)=>{console.log(err)});

// // Using setTimeout, we can execute code after the queue is empty
// setTimeout(() => {
//     console.log(p);
//     console.log(p2);
//     console.log(p3);
//   });
console.log("************************************************")
// //   Asynchronicity or synchronicity of Promise.all
// // Passing an array of promises that are already resolved,
// // to trigger Promise.all as soon as possible
// const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

// const p4 = Promise.all(resolvedPromisesArray);
// // Immediately logging the value of p
// console.log(p4);

// // Using setTimeout, we can execute code after the queue is empty
// setTimeout(() => {
//   console.log("the queue is now empty");
//   console.log(p4);
// });

// // Logs, in order:
// // Promise { <state>: "pending" }
// // the queue is now empty
// // Promise { <state>: "fulfilled", <value>: Array[2] }
//------------------------------------
// The same thing happens if Promise.all rejects:
const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
const p5 = Promise.all(mixedPromisesArray).catch((err)=>{console.log(err)});
console.log(p5);
setTimeout(() => {
  console.log("the queue is now empty");
  console.log(p5);
});

// Logs:
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "rejected", <reason>: 44 }