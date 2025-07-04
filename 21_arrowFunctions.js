// () => {} arrow function

const addTwo = (num1 , num2) =>{  // const variable = (arguments )  => arrow function {} 
    return num1 + num2;
}

console.log(addTwo(5,5));

const addThree = (num1 , num2 , num3) => num1 + num2 + num3;  // variable = (argument)  => arrow function the add.. easy way

console.log(addThree(10,20,30));


// return explicit return and () => (...) implicit return
const add = (num1 , num2) => (num1 + num2) // same oi but lasta brakets.. professional way use in react

console.log(add(6,6));