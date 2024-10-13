// limitations of maps
// 1. There is no complete way to iterate over keys, and the keys() method converts fields to given strings, which leads to the collision of keys.
// 2.There is also no simple way to add new keys and values to the object.
const scores = new Map([['Shubham', 12], ['Vaishnavi', 13], ['Juhi', 10], ['Priyanka', 12]]);
scores.set('sohuard', 14);
console.log(scores.size); // added to the map

// iterations in map
const scores1 = new Map([['Shubham', 12], ['Vaishnavi', 13], ['Juhi', 10], ['Priyanka', 12]]);
scores1.set('Sohuard', 14);
console.log(scores1.size);
for(const [name, score] of scores1.entries()) 
{
  console.log(`${name} : ${score}`);
}

// Converting the keys to arrays
let userRoles = new Map([
    ['shubham', 'admin'],
    ['Vaishnavi', 'editor'],
    ['Juhi', 'subscriber']
]);
var keys = [...userRoles.keys()];
console.log(keys);