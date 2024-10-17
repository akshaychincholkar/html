// A closure in JavaScript is a function that retains access to variables from its outer (enclosing) 
// scope even after that scope has finished executing. It "closes over" the variables it needs, 
// preserving them and allowing the function to access and manipulate those variables, even when invoked outside their original scope.

function outer(){
    let value = "I am present in outer function";
    function inner(){
        console.log("value: "+value);
    }
    return inner;
}
console.log(outer())

function outer() {
    let outerVar = 'I am from the outer function';
    function inner() {
        console.log(outerVar);
    }
    return inner;
}
const closureExample = outer();
closureExample(); 