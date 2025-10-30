What is the Temporal Dead Zone (TDZ)?

The time between entering a scope and the variable being declared
During this time, the variable exists but cannot be accessed
Both let and const have TDZ

Compare with var:

console.log(x);  // undefined (no error!)
var x = 10;
