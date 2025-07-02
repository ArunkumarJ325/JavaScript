/**PROMISE API
 * Consider there are three promises P1-3Sec, P2-1Sec, P3-2Sec
 * 
 * 
 * -----------------Promise.all ------------------------------------
 * takes array of promises, Result will be array
 *  if all of them get success it will return all the success values after 3Sec(because P1 is the last promise api call to finish)
 *  if anyone of them fails, it will quickly return error, The other promises results are not ignored, just their results are ignored.
 *  Example code(You can practice all the promise api in this) */
    const p1= new Promise((resolve,reject)=>{
        setTimeout(()=>reject("success p1"),3000);
    });
    const p2= new Promise((resolve,reject)=>{
        setTimeout(()=>reject("success p2"),1000);
    })
    const p3= new Promise((resolve,reject)=>{
        setTimeout(()=>reject("success p3"),2000);
    })

    Promise.any([p1,p2,p3]).then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.error(err);
    })




/*
 * -----------------Promise.allsetteled-------------------------
 *  It's success is exactly same as promise.all success 
 *  The result of this api call be with result of all the promises irrespective of the result.
 *  Result format is array
 *  Each result object looks like this 
    * // if resolved
    { status: "fulfilled", value: <resolved value> }

    // if rejected
    { status: "rejected", reason: <error value> }

 * 

    const p1 = Promise.resolve("🍕 Pizza ready");
    const p2 = Promise.reject("❌ Failed to make burger");
    const p3 = Promise.resolve("🥤 Drink ready");

    Promise.allSettled([p1, p2, p3]).then((results) => {
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
        console.log(`✅ Task ${index + 1} succeeded:`, result.value);
        } else {
        console.log(`❌ Task ${index + 1} failed:`, result.reason);
        }
    });
    });
 *
    ----------------------Promise.race------------------------------------
    It's kind of race, the first settle either resolve or reject .
    Result format is single Promise Result.


    ----------------------Promise.any------------------------------
    It will wait for first success, Result Formt is single Promise if it is success.
    If the first settle promise fails, it will wait for other.
    Basically it is seeking for first success.
    If all of them fails then it will give you aggregate of error i.e array of errors.

 */