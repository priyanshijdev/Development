Hoisting allows JavaScript to move variable and function declarations to the top of their scope before execution.

🔥 How It Works?
1️⃣ Function declarations are fully hoisted (can be called before they appear in code).
2️⃣var is hoisted with an undefined value.
3️⃣let & const are hoisted but remain in the "Temporal Dead Zone" (accessing them before declaration causes an error).

error in let & const -> reference error . 

📌 Example:
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;

foo(); // Works!
function foo() {
 console.log("Hoisted!");
}

----------------------------------------------------------------------------------------------------

| Type                 | Hoisted?  | Initialized?      | Notes                              |
| -------------------- | --------- | ----------------- | ---------------------------------- |
| `var`                | Yes       | Yes (`undefined`) | Can be accessed before declaration |
| `let` / `const`      | Yes       | ❌ No              | TDZ exists until declaration line  |
| Function declaration | Yes       | Yes               | Safe to call before definition     |
| Function expression  | Partially | ❌ No              | Variable is hoisted, value is not  |

ex:

console.log(myVariable); // Output: undefined (because var is hoisted and initialized to undefined)
var myVariable = "Hello";
console.log(myVariable); // Output: Hello

console.log(anotherVariable); // Output: ReferenceError: Cannot access 'anotherVariable' before initialization (because let is hoisted but not initialized until the declaration line)
let anotherVariable = "World";
console.log(anotherVariable); // Output: World
 
#IMPORTANT
 
sayHello(); // Output: Hello (because function declarations are hoisted)
function sayHello() {
  console.log("Hello");
}

//sayGoodbye(); // Output: ReferenceError: sayGoodbye is not defined (because function expressions are not hoisted)
const sayGoodbye = function() {
  console.log("Goodbye");
};
