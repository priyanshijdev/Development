Q1. What is the event loop in Node.js? How does it work?

  The event loop is a core concept in Node.js that enables non-blocking, asynchronous programming. 
  It allows Node.js to perform non-blocking I/O operations — even though JavaScript is single-threaded 
  — by offloading operations to the system kernel or internal threads when possible.


Q2. What is the Event Loop?
    
The event loop is a mechanism that continuously checks the call stack and the callback queue, executing tasks in the right order. 
It’s responsible for handling asynchronous operations like:

File I/O

Network requests

Timers (setTimeout, setInterval)

Promises

Event listeners



Q3. How It Works (Step-by-Step)
Node.js architecture uses:

Call Stack: Executes synchronous code.

Event Loop: Manages the order of execution.

Callback Queue: Stores callbacks from async operations (e.g., setTimeout, I/O).

Microtask Queue: Stores resolved promises and process.nextTick.
