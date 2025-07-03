function calculateCartPrice(...num1){  // rest operator... parameter pass
    return num1; // return koira disi
}

console.log(calculateCartPrice(100,200,400,1000,999)); // taile sob print hoibo array te

function calculateCartPrice2(val1 ,val2 , ...price){             // ai bhabe o kora jai
    return price;                   // argument/ parameter na dile sob ti print hoito na first nmbr ta oi print hoibo
}  // data di array te print hoiya jaibo ... dile

console.log(calculateCartPrice2(20,20,30,40,50,60,60));

const user = {
    username : "sanjoy deb",
    age : 19 ,

}

function handleObject(anyObject){ // function a argument a anyObject disi
    console.log(`username is ${anyObject.username} and age is. ${anyObject.age}`);  // ` batricts diya print kortam.. ${}
} 
handleObject(user) // function er name r tar bitore object er name pass korlam... kun object thika data dibo koon lakbob to

handleObject({
    username: "Rahul Deb",
    age: 25
});

const array = [100,200,300,400,500];  // array create


function handleArray(anyArray){  // function a new arugument
    return anyArray;  // return value argument
}

console.log(handleArray(array))