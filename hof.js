//This code will not execute , only for understanding


const values=[1,2,3,4];

// const area=function(radius){
//     return Math.PI * radius * radius;
// }

// const diameter=function(radius){
//     return 2* radius;
// }

// const circumference=function(radius){
//     return 2 * Math.PI * radius;
// }

// Array.prototype.calculate=function(logic){
//     let output=[];
//     for(let i=0;i<this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return output;
    
    
// }
// const fil=values.filter(function(x){
//     if(x>1){
//         return x;
//     }
// })
// console.log(fil);


//console.log(values.map(area));
// function maxi(val){
//     let ans=0;
//     for(let i=0;i<val.length;i++){
//         if(val[i]>ans){
//             ans=val[i];
//         }
//     }
//     return ans;
// }
// Same maximum function in the reduce
const an1=values.reduce((acc,curr)=>{
    if(acc<curr){
        acc=curr;
    }
    return acc;
},0);
console.log(an1)

//console.log(maxi(values));



// console.log(values.map(function(x){
//     return x+1;
// }))

// console.log(values.calculate(area));


// console.log(calculate(values,area));
// console.log(calculate(values,diameter));
// console.log(calculate(values,circumference));
