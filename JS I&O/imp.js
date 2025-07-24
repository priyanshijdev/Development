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
