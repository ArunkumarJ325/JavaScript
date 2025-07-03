/*
Async:

    

    Async function always return promise.
    In any case it will always return promise.

    if you return a non promise value, like returning a string or anyother
    then this function will automatically wrap the result inside the promise and it will return


    Async and await are used to handle promise,

    Await is a keyword which can be used only inside the async function .
    Await is written in front of the promise, which resolve promise.

        wawait resumes only after:
    ✔ All synchronous code finishes
    ✔ Call stack becomes empty
    ✔ Microtasks and callbacks (if any) are then picked by the event loop

    when await is encounterd the function is suspended and remaining part of the code is executed,
    
    After a Promise is resolved, the remaining code after await or the .then() callback is moved to the microtask queue — not the call stack directly.
*/
// const p= new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         resolve("new promise");
//     },2000);
    
// })

// async function getData(){
//     const res=await p;
//     console.log(res);
//     console.log("Welcome");
//     }
// getData();
// getData().then((data)=>{
//         console.log(data);
//     });

console.log("Start");

async function example(){
    const val1=await new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Promise 1 is executed");
        },1000);
    });
    
    console.log("Promise 1 is Finished", val1);
    const val2=await new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Promise 2 is executed",);
        },3000);
    });
    console.log("Promise 2 is Finished",val2);

    const val3=await new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Promise 3 is executed");
        },5000);
    });
    console.log("Promise 3 is Finished",val3);


    const val4=await new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Promise 4 is executed");
        },7000);
    });
    console.log("Promise 4 is Finished",val4);
};


example();

console.log("End");
for (let i = 0; i < 1e8; i++) {
    
} // long loop

console.log("Loop done");


/**
 * 
 * 
 * 🔁 Execution Timeline Breakdown

console.log("Start");

async function example() {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Resolving...");
      resolve("Success ✅");
    }, 1000);
  });

  console.log("After await:", data); // This will go to microtask queue
}

example();

console.log("End");
🔬 What Actually Happens?
Step	Explanation
1️⃣	console.log("Start") runs immediately.
2️⃣	example() runs → enters async function.
3️⃣	Hits await — sets setTimeout (1s) and suspends example()
4️⃣	console.log("End") runs → global synchronous code finishes
5️⃣	After 1 second, setTimeout callback fires → logs "Resolving..."
6️⃣	Inside setTimeout, the Promise is resolved
7️⃣	The continuation (console.log("After await:", data)) is moved to the microtask queue
8️⃣	Event loop checks: Call stack is empty, no more synchronous code
9️⃣	Event loop picks from microtask queue, resumes example() from await line
🔟	"After await: Success ✅" is printed



✅ Summary:
Code after await is not executed immediately.

It is scheduled in the microtask queue after the Promise resolves.

Only when the call stack is empty, the event loop picks from the microtask queue.

The next line after an await is suspended, and once the Promise resolves,
 that line (and rest of the async function) is moved to the microtask queue, not executed immediately.
 */