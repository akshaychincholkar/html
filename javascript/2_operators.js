// Arithmetic Operators
// ** = used to find the power
// Other arithmatic operators are same: +,-,*,/,++,--,%
let num1 = 10;
let num2 = 5;
// addition
console.log("num1 + num2: " + (num1 + num2));
// subtraction
console.log("num1 - num2: " + (num1 - num2));
// multiplication
console.log("num1 * num2: " + (num1 * num2));
// division
console.log("num1 / num2: " + (num1 / num2));
// remainder
console.log("num1 % num2: " + (num1 % num2));
// increment operator
console.log("num1++: " + num1++);
// decrement operator
console.log("num1--: " + num1--);
// power
console.log("num1 ** num2: " + (num1 ** num2));

// ***************************************
// Comparison (Relational) Operators
// ==,, !=, < , <=, >, >=
// === and !== Strict equal / not equal to operator returns the value true if the operands are equal / not equal and of the same type.
let val1 = 10;
let val2 = 5;
let val3 = "10";
let val4 = 15;
// equal to operator
console.log("Conditional Operators")
console.log("val1 == val3: " + (val1 == val3));
// strict equal to operator
console.log("val1 === val3: " + (val1 === val3));
// not equal to operator
console.log("val1 != val2: " + (val1 != val2));
// strict not equal to operator
console.log("val1 !== val3: " + (val1 !== val3));

// ***************************************
// Bitwise Operators
// & | ~(not) << (left shift) >>(right shift) <<<(bitwise zero fill-right shift)

// ***************************************
// Logical Operators
// &&, ||, !

// ***************************************
// Assignment Operators
// = += -= *= /= %=

// ***************************************
// String Operators
// + (Concatination)

// ***************************************
// Comma Operator
// comma operator to updates two variables at once
// for (let i = 0, j = 0; i < 3; i++, j++)
//     arr[i][j] += 1;
 
// ***************************************
// Operator Precedence
// member	                            . []
// create instance	                    () new
// negation/increment/decrement	        ! ~ - + ++ -- typeof void delete
// multiply/divide/remainder	        * / %
// addition/subtraction	                + -
// bitwise shift operators 	            << >> >>>
// relational operators	                < <= > >= in instanceof
// Equality operator	                == != === !==
// bitwise AND	                        &
// bitwise XOR	                        ^
// bitwise OR	                        |
// logical AND	                        &&
// logical OR	                        ||
// conditional ternary operator	        ?:
// assignment	                        = += -= *= /= %= <<= >>= >>>= &= ^= |= &&= ||= ??=
// comma	                            ,
 