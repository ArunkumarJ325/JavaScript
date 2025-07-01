/* This used to understand the Callback funtions in js */
/* what is callback?
A callback function is a function that is passed as an argument to another function, 
and is intended to be executed later, at some point in time. 
The 'calling' function will 'call back' this function when a specific event occurs or a task completes.*/

const radius=[1,2,3,4];

function area(val){
    return Math.PI * val * val;
}
function circumference(val){
    return 2 * Math.PI * val ;
}

function diameter(val){
    return 2 * val;
}

function calculate(logic, radius){
    let result=[];
    for(let i=0;i<radius.length;i++){
        result.push(logic(radius[i]).toFixed(2));
    }
    return result;
}

console.log("Area is "+(calculate(area,radius)));
console.log("Circumference is "+(calculate(circumference,radius)));
console.log("Diameter is "+(calculate(diameter,radius)));
