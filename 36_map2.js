const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map((value)=>{
    return value + 10;                    // Map automatic oi return kore  value but lekle practise bhalo
})

console.log(newNums);



const myValue = [1, 2, 3, 4, 5, 6, 7, 8., 9, 10];


const newValue = myValue
.map((value)=>{
  return value * 10;           // ektar pore ekta method o lagaite parmu
}).map((value)=>{
    return value + 1                 // 10 plus , 1 + map diya koira... filter a condition lagai disi
}).filter((value)=>   value > 50  );

console.log(newValue);