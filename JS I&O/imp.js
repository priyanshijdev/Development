console.log('Start'); // 1. Synchronous

setTimeout(() => {
  console.log('setTimeout callback'); // 4. Macrotask
}, 0);

Promise.resolve('Promise resolved').then(value => {
  console.log(value); // 3. Microtask
});

async function fetchData() {
  console.log('Inside async function'); // 2. Synchronous part of async function
  const result = await Promise.resolve('Async/await result');
  console.log(result); // 5. Microtask after await
}

fetchData();

console.log('End'); // 6. Synchronous


---------------------------------------------------------------------------------------------
Start

Inside async function

End

Promise resolved → (microtask)

Async/await result → (microtask)

setTimeout callback → (macrotask)



| Phase       | Output                  |
| ----------- | ----------------------- |
| Synchronous | `Start`                 |
|             | `Inside async function` |
|             | `End`                   |
| Microtasks  | `Promise resolved`      |
|             | `Async/await result`    |
| Macrotasks  | `setTimeout callback`   |
  -----------------------------------------------------------------------------------------------------------------------------

  console.log('first');

setTimeout(function() {
  console.log('timeout');
}, 0);

Promise.resolve()
  .then(function() {
    console.log('promise1');
  })
  .then(function() {
    console.log('promise2');
  });

console.log('end'); 


o/p: first
end
promise1
promise2
timeout


Step-by-step Execution
Synchronous logs
first
end

Promise .then() callbacks (microtasks)
promise1
promise2

Timeout (macrotask)
timeout
