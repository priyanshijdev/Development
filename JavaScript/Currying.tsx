                                      CURRYING 
technique , process of taking multiple arg into sequence of functon. and each fn taking single argument.

function add(a, b, c) {
  return a + b + c;
}

// Curried version of the add function
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}

// Using the non-curried function
console.log("Non-curried result:", add(1, 2, 3));


console.log(curriedAdd(1)(2)(3)); // Output: 6

// Using the curried function
console.log("Curried result:", curriedAdd(1)(2)(3)); >>>>>>>


USE CASE :
1 config and middlewares
2 memoization & caching 


                                      Infinite Currying in JavaScript

Infinite currying allows you to call a function an unlimited number of times, 
the final result is computed when a specific condition is met (like an empty call or using a value).

                                  How Does Infinite Currying Work?
Infinite currying leverages closures and function overloading in JavaScript. 
Here's a basic example:

function add(a) {
  return function(b) {
    if (b !== undefined) {
      return add(a + b); // Continue currying
    }
    return a; // Termination condition
  };
}

console.log(add(1)(2)(3)()); // Output: 6
console.log(add(5)(10)(-2)(7)()); // Output: 20


****IMP NOTE****:

  console.log(add(5)(10)(-2)(7)); ---> Infinte currying
This will not give output yes!! curried only works with 3 argm 
after that U have pass empty () paranthese for output.
