function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("n");
    console.log("j");
    console.log("o");
    console.log("y");
}

//   sayMyName --- print korbar somoi lekmu j edi hoilo ---- referance
//sayMyName()  --- () laganir pore hoiya jaibo -------- execution

sayMyName()  // direct print koron jai ....Function er name ....... method banaiya


function addTwoNumbers (num1, num2){           // ekta function banaisi nam addTwoNumbers tar bitore argument pass korsi num1 r ekta num2
console.log(num1 + num2);                         // dui argument a plus + korlam
}    

// addTwoNumbers()  // but NaN aibo output .. plus kormu nmbr koi

addTwoNumbers(2, 3)                                  // function j bhabe print kore oi bhabe tar argument er bitore nmbr dimu same as java
addTwoNumbers(2 , '3')                                 // nmbr r string er sathe loiya aise

addTwoNumbers(2, 'a')       // same

addTwoNumbers(2, null)              // null hoile 2 + kichu nai ...to answer just 2

// new bhabe o dekhi

function multiNumber(num1, num2){             // multiNumber nam a function create tar bitore 2 parameter dise num1 , num2

    let result = num1 * num2                      // function er bitore ekta variable banaisi tar bitore 2 tara parameter re + plus korsi

    return result                                  // retun result .... mane value re return korse... value return na hoile output dito na
    l
}

const result = multiNumber(4,5);             // tui ta parameter er value disi eda o ... oi return kora value te as a variable
console.log(result);  // print korlam oi new variable re  jar bitore plus hoise..

function SubstractNum(num1, num2){
    return num1 - num2
}
console.log(SubstractNum(10, 1));
console.log("*******************************");

function loginUserMessage(username){ // function create korsi tar bitore argument .. username disi
    return `${username} just logged in`  // return korsi ` diya  tar pore variable declear korsi
}
console.log(loginUserMessage("sanjoy"));

function loginDetails(username){
    return `${username} login hogya`;
}
console.log(loginDetails());  // kichu variable er value na dile eda undefined hoiya jaibo  

function data(info){
    if (info ===undefined) {
        console.log(`undifined confirmed`);
        return
    }
}
console.log(data()); // undefined   ... null na.. decleared korsi na