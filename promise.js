/* what is promise ?
The Promise object represents the eventual completion (or failure) of an asynchronous operation 
and its resulting value .
It acts as a placeholder for a value that is not yet known, 
but will become available at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.


Based on my Understanding:
Promise is synchronous 
it will executed in the callstack 
when the resolve line is reached, it will put the promise's associated .then() in the microtask queue and marks the promise as fullfilled
then other synchronous code is executed
eventloop will process the rest.


var p = new Promise((resolve, reject) => {
  console.log("State: pending");
  setTimeout(function(){
      resolve("Done");
  },2000);
  console.log("After resolve call");
});

console.log("hIii")
console.log(p); // shows fulfilled with value in devtools (timing matters!)
setTimeout(()=>console.log(p),3000);
p.then((r)=>console.log(r));

OUTPUT:
State: pending
After resolve call
hIii
Promise { <pending> }
Done
Promise { 'Done' }




*/

console.log('--- Start of script ---');

// Function that returns a Promise that will resolve after 2 seconds
function createPendingPromise() {
    return new Promise((resolve, reject) => {
        console.log('Promise function is called');
        // Simulate an asynchronous operation (like a network request)
        setTimeout(() => {
            console.log('Simulated async operation finished!');
            resolve('Data from the async operation'); // Resolve the promise after 2 seconds
        }, 2000); // 2000 milliseconds = 2 seconds
    });
}

const myPromise = createPendingPromise(); // (A) Calling the function, which returns a PENDING promise

console.log('--- After calling createPendingPromise() ---'); // (B) This will execute immediately after (A)

// Log the promise's state *immediately* after it's created.
// You will see it as <pending> or Promise {<pending>} in most browser consoles.
console.log('State of myPromise:', myPromise); // (C)

// Attach a .then() to see when it resolves
myPromise.then(value => {
    console.log('Promise has resolved with value:', value); // (D) This will run after 2 seconds
    console.log('State of myPromise AFTER resolve:', myPromise); // (E) Now it will be <resolved> or Promise {<fulfilled>}
});

console.log('--- End of script (synchronous part) ---'); // (F) This will execute immediately after (C)

// Let's add another setTimeout to ensure the Call Stack is clear
setTimeout(() => {
    console.log('--- End of all execution (after all delays) ---');
}, 3000); // Wait longer than the promise's resolution

//OUTPUT

/* --- Start of script ---
Promise function is called
--- After calling createPendingPromise() ---
State of myPromise: Promise { <pending> }
--- End of script (synchronous part) ---
Simulated async operation finished!
Promise has resolved with value: Data from the async operation
State of myPromise AFTER resolve: Promise { 'Data from the async operation' }
--- End of all execution (after all delays) ---  */


/*
EXPLANATION:
 the Synchronous code will execute i.e the 2 sec setTimeout in the Promise and 3 sec Timeout won't execute until the callstack is empty
 The main thing is the status of promise will be Promise{pending} initially 
 when the call stack is empty , 
 the 2 sec setTimeout expires 
 The callback function of the 2sec setTimeout is pushed into the callback queue 
 Eventloop see the microtask queue (initially empty) 
 then see's the callback queue which has the callback function of the 2sec setTimeout
 Eventloop places it in the call stack which will execute the resolve() which will change the state of promise
 Now Promise will be Promise { 'Data from the async operation' }
 IMPORTANT STEP ----> so the change it promise state will place it attached .then,.catch,.finally in the microtaskqueue
 The callstack is empty now
 Event loop again sees the microtask queue which will contain the promise .then which will be pushed into the call stack
 After all the task in microtask queue is executed, then only the eventloop will see the callback queue 
 At last only the 3 sec setTimeout is executed which is in the callback queue  */