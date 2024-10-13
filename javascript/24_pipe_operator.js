// Pipe operator: allow for a more concise and readable way of chaining function calls
const sum = (number) =>{
    return number +3;
}
const multiply = (number) =>{
    return number *4;
}
const divide = (number) =>{
    return number / 2;
}

const pipe = (funcA , funcB) => {
    return (arg) => {
        const step1 = funcA(arg);
        const result = funcB(step1);
        return result;
    }
}
//print the result
console.log(pipe(sum,multiply)(2));
const pipe2 = (funcA , funcB) => (arg) => funcB(funcA(arg));
console.log(pipe2)

const _pipe = (funcA, funcB) => (arg) => funcA(funcB(arg));

// merge all function into a single using the reducer function
const pipe3 = (...funcs) => {
    return funcs.reduce((prev, next) => {
        return _pipe(prev, next);
    });
}

const answer = pipe3(sum , multiply , divide)(2);
console.log(answer)

// const ans = 2 |> sum |> multiply |> divide;