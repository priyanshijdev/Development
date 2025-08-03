Callbacks vs Promises vs Async/Await

Callbacks, promises and async/await, these are the methods to handle asynchronous behaviour in javascript. 
  We need asynchronous programming for fetching data from the server, uploading files and handling user interactions. 
  Initially, we used callbacks but it had consequences like deep nesting and code complexity.  -> promises overcome


##Callbacks
Callbacks are those functions which are passed as arguments to another function and are executed when a particular task is completed.

function fetchData(callback) {
    setTimeout(() => {
        callback('Data fetched');
    }, 1000);
}

fetchData((result) => {
    console.log(result); // Output: Data fetched
});

Callback hell problem: It creates a problem when we have multiple asynchronous operations.   There it forms a nested structure .
---------------------------------------------------------------------------------------------------------------------------------------
##Promises
Promises is a representation of completion or failure of any asynchronous operation. 
  It allows chaining of multiple asynchronous operations. There are basically 3 states in promises i.e., resolve, pending and reject.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 1000);
    });
}

fetchData()
    .then((result) => {
        console.log(result); // Output: Data fetched
})
    .catch((error) => {
        console.error(error);
});

-----------------------------------------------------------------------------------------------------------------------------------

##Async/Await
Async/await is a feature that is built on top of promises to make it better and efficient. 
  It is more concise and provides a synchronous-like way to write asynchronous programs. await keyword is always used inside the async function scope.

async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 1000);
    });
}

async function getData() {
    try {
        const result = await fetchData();
        console.log(result); // Output: Data fetched
    } catch (error) {
        console.error(error);
    }
}

getData();


Best Practices and Use Cases
When to Use Callbacks: Use callbacks either for simple and easy asynchronous operations or when handling those APIs that only support callbacks.
When to Use Promises: Promises are well suitable for handling multiple asynchronous operations in a more structured manner using .then.
When to Use Async/Await: Use Async/Await for writing clean and much readable asynchronous code, especially for complex tasks involving multiple asynchronous operations.
