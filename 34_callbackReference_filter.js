// for each loop -- value return kore na

// tar jonno...... filter().. use korle  return value aiye...

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];     // array created

const myNewNums = myNums.filter((value)=>(value > 4));    // new array = oldarray.filter ( ).. (arrow function (value) => condition )

console.log(myNewNums);    

const score = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]            // array created


const IND = score.filter((value)=>{  // new array = oldarray. filter( )... (runs => arrow function)
   return value > 4;                 // jodi { } brackets dile.... return lekte hoibo... pore condition
})

console.log(IND);

// foreach diya


const duip = [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]               // array created

const newduip = [];             // empty array created
duip.forEach((value)=>{   // old array. forEach().. loop arrow function
    if(value>14){  // in arrow function..     condition 
        newduip.push(value)  // new array. push(mosla)...... old array conditional data push to new array
    }
});
console.log(newduip);