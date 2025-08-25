
                                        Event Loop:
manges all async operation & ensures non blocking behaviour.
------------------------------------------------------------------

continously, checks for event queue for task.
if 'main execution' is empty & event queue has task waited to be executed eventLoop will dequeue task 1 by 1.
Once Async operation completes, callBack fn is placed in queue - Task Queue.

----------------------------------------------------------

Task --> Micro Task queue 
    ----> Macro Task queue

Twist : Micro task have higher priority than Macro Task! 


Components of the Event Loop:

Call Stack: Keeps track of function calls. When a function is invoked, it is pushed onto the stack. When the function finishes execution, it is popped off.
  
Web APIs: Provides browser features like setTimeout, DOM events, and HTTP requests. These APIs handle asynchronous operations.
  
Task Queue (Callback Queue): Stores tasks waiting to be executed after the call stack is empty. These tasks are queued by setTimeout, setInterval, or other APIs.
  
Microtask Queue: A higher-priority queue for promises and MutationObserver callbacks. Microtasks are executed before tasks in the task queue.
  
Event Loop: Continuously checks if the call stack is empty and pushes tasks from the microtask queue or task queue to the call stack for execution.
