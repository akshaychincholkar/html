// JavaScript promises are objects that represent the eventual completion or failure of an asynchronous operation.
//  It is a means of assurance that a particular operation will occur shortly. 
// Though, the promise doesn't need to be fulfilled every time. For example, if there is a network error, the promise won't be fulfilled.

const promise = new Promise((resolve,reject)=>{
    let isPromiseKept = true;
    if(isPromiseKept){
        const yes = "Yay! Kept the promise";
        resolve(yes)
    }else{
        const no = "Nooooo! Promise refused";
        reject(no);
    }
})

const isPromiseKept = () =>{
    promise.then((value)=>{
        console.log(value)
    }).catch((value)=>{
        console.log(value)
    });
}

isPromiseKept();