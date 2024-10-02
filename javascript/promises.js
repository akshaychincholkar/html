// JavaScript promises are objects that represent the eventual completion or failure of an asynchronous operation.
//  It is a means of assurance that a particular operation will occur shortly. 
// Though, the promise doesn't need to be fulfilled every time. For example, if there is a network error, the promise won't be fulfilled.

// const promise = new Promise((resolve,reject)=>{
//     let isPromiseKept = true;
//     if(isPromiseKept){
//         const yes = "Yay! Kept the promise";
//         resolve(yes)
//     }else{
//         const no = "Nooooo! Promise refused";
//         reject(no);
//     }
// })

// const isPromiseKept = () =>{
//     promise.then((value)=>{
//         console.log(value)
//     }).catch((value)=>{
//         console.log(value)
//     });
// }

// isPromiseKept();


const firstPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let doStart = true;
        if(doStart){
            resolve("Hello")
        }else{
            reject("Rejected to follow the timeout...")
        }
    },5000)
})

const secondPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let second = true;
        if(second){
            resolve("Welcome to the Bittu's world!");
        }else{
            reject("You had entered to the wrong world..")
        }
    },1000);
});

// do the chaining of the above promises

const promiseChaining = (()=>{
    firstPromise.then((value)=>{
        console.log(value)
        return secondPromise;
    }).then((value2)=>{
        console.log(value2);
    }).catch((err)=>{
        // failureCallback();
        console.log("Error:"+err)
    });
});

promiseChaining()
