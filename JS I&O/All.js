

// ==================== QUESTION 1 ====================
// What will be the output order?
console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');

// Output: 1, 3, 2
// Reason: setTimeout is async, goes to callback queue


// ==================== QUESTION 2 ====================
// What will be the output?
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');

// Output: Start, End, Promise, Timeout
// Reason: Promises (microtask) execute before setTimeout (macrotask)


// ==================== QUESTION 3 ====================
// Classic setTimeout in loop
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3 (after 1 sec)
// Reason: var is function-scoped, closure captures reference

// Fix 1: Use let (block-scoped)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0, 1, 2

// Fix 2: Use IIFE
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 1000);
  })(i);
}


// ==================== QUESTION 4 ====================
// Promise chaining output
Promise.resolve()
  .then(() => console.log('1'))
  .then(() => console.log('2'))
  .then(() => console.log('3'));

console.log('4');

// Output: 4, 1, 2, 3


// ==================== QUESTION 5 ====================
// Multiple setTimeout with different delays
setTimeout(() => console.log('A'), 0);
setTimeout(() => console.log('B'), 100);
setTimeout(() => console.log('C'), 0);
console.log('D');

// Output: D, A, C, B


// ==================== QUESTION 6 ====================
// Promise vs setTimeout
console.log('script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('promise1');
  })
  .then(() => {
    console.log('promise2');
  });

console.log('script end');

// Output: script start, script end, promise1, promise2, setTimeout


// ==================== QUESTION 7 ====================
// Nested setTimeout
setTimeout(() => {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 0);
}, 0);

setTimeout(() => {
  console.log('3');
}, 0);

// Output: 1, 3, 2


// ==================== QUESTION 8 ====================
// Promise with setTimeout
new Promise((resolve) => {
  console.log('1');
  resolve();
  console.log('2');
}).then(() => {
  console.log('3');
});

setTimeout(() => {
  console.log('4');
}, 0);

console.log('5');

// Output: 1, 2, 5, 3, 4
// Reason: Promise executor runs synchronously


// ==================== QUESTION 9 ====================
// async/await with console.log
async function test() {
  console.log('1');
  await Promise.resolve();
  console.log('2');
}

test();
console.log('3');

// Output: 1, 3, 2
// Reason: await pauses execution, rest continues


// ==================== QUESTION 10 ====================
// Mixed: Promise, setTimeout, process.nextTick (Node.js)
console.log('start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('promise');
});

process.nextTick(() => {
  console.log('nextTick');
});

console.log('end');

// Output (Node.js): start, end, nextTick, promise, setTimeout
// nextTick has highest priority (microtask, runs before promises)


// ==================== QUESTION 11 ====================
// Promise.all with setTimeout
Promise.all([
  new Promise(resolve => setTimeout(() => resolve('A'), 100)),
  new Promise(resolve => setTimeout(() => resolve('B'), 50)),
  new Promise(resolve => setTimeout(() => resolve('C'), 150))
]).then(results => console.log(results));

// Output (after 150ms): ['A', 'B', 'C']


// ==================== QUESTION 12 ====================
// Event Loop - Tricky Order
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve()
  .then(() => console.log('3'))
  .then(() => console.log('4'));

setTimeout(() => console.log('5'), 0);

Promise.resolve().then(() => console.log('6'));

console.log('7');

// Output: 1, 7, 3, 6, 4, 2, 5


// ==================== QUESTION 13 ====================
// Promise reject vs catch
Promise.reject('error')
  .catch(err => console.log('caught:', err))
  .then(() => console.log('then executed'));

// Output: caught: error, then executed


// ==================== QUESTION 14 ====================
// Async function return value
async function getValue() {
  return 'Hello';
}

getValue().then(result => console.log(result));
console.log('World');

// Output: World, Hello


// ==================== QUESTION 15 ====================
// setTimeout with 0 vs immediate execution
console.log('A');
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 0);
console.log('D');

// Output: A, D, B, C


// ==================== KEY CONCEPTS ====================
/*
1. Call Stack: Synchronous code executes first
2. Microtask Queue: Promises, queueMicrotask, process.nextTick (Node)
3. Macrotask Queue: setTimeout, setInterval, setImmediate (Node)
4. Execution Order: Call Stack → Microtasks → Macrotasks
5. var vs let in loops: var is function-scoped, let is block-scoped
6. async/await: Syntactic sugar over Promises
7. Promise executor: Runs synchronously
*/
