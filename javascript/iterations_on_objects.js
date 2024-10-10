// Following are the 5 ways to iterate on objects
// 1. for in loop
// 2. Object.keys()
// 3. Object.values()
// 4. Object.entries()
// 5. using getOwnPropertyNames()

let student = {
    "name": "Akshay",
    "rollNo":200,
    "email":"akshaychincholkar@gmail.com"
}

// 1. using the for in loop
for ( let key in student){
    console.log(key+":"+ student[key]);
}

console.log("----------------------------------")
// 2. Object.keys()
Object.keys(student).forEach(key =>{
    console.log(key+":"+ student[key]);
})
console.log("----------------------------------")
// 3. Object.values()
Object.values(student).forEach(values =>{
    console.log(values);
})
console.log("----------------------------------")
// 4. Object.entries() returns only enumerables
Object.entries(student).forEach(([key,value])=>{
    console.log(key+":"+value);
})
console.log("----------------------------------")

// 5. Object.getOwnPropertyNames() includes enumerables
Object.getOwnPropertyNames(student).forEach(key=>{
    console.log(key+":"+student[key]);
})
// lets see the example:
const person = {
    name: 'Alice',
    age: 30,
    isStudent: false
};
Object.defineProperty(person, 'gender', {
    value: 'female',
    enumerable: false
});
const propertyNames = Object.getOwnPropertyNames(person);
console.log(propertyNames); 
console.log("Properties using the Object.keys(): "+Object.keys(person)) //name,age,isStudent











