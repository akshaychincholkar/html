// for, while, do .. while
// for in and for of are new in js

const user = {
    "name":"Akshay Chincholkar",
    "city":"Pune",
    "age":30
}
// for in example
for( let x in user){
    console.log("key:"+x+" value:"+user[x])
}

// for of example
// for( let x of user){ //TypeError: user is not iterable
//     console.log(x) 
// }
let flower = "Daffodils";
var text = ""
for(let x of flower){
    console.log(x+" ")
    text +=x
}
console.log(text)

// javascripts also contains the break and continue