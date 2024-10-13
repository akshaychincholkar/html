parseInt("346pqr");  
// Returns 346 (stops parsing at 'p')
console.log(parseInt("346pqr"));
parseInt("52.7");
console.log(parseInt("52.7"))  
// Returns 52 (stops parsing at the decimal point)

// The function return number or NaN(Not a Number).

// 1. If the string cannot be converted to a number, parseInt() returns NaN.
 
// 2. If the radix parameter specified in parseInt() 
// is not an integer or is not within the range of 2 to 36, parseInt() returns NaN.