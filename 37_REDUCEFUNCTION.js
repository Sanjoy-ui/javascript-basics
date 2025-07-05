const num1 = [1,2,3,4];
const num2 = num1.reduce((accumulator , currentValue)=>{
    return accumulator + currentValue ; 

},0);

console.log(num2);


const num3 = [1, 2, 3, 4, 5];

const num4 = num3.reduce((acc, currval)=>{
    console.log(`accumulator is ${acc} current value is ${currval}`);
    return acc + currval;

},0);


console.log(num4);

//   acc first a deon lage , 0    -- amer echa kita diya start kormu , 3 o dite pari
//   acc value ase0 -- r curval er value hoilo array di
// to 0 + array 1 then... ans hoilo  1
// 1 hoilo acc then array 2 + 1 .... ans hoilo 3
//3 hoilo acc then array 3 + 3 .... ans hoilo 6
//6 hoilo acc then array 4 + 6 .... ans hoilo 10
//10 hoilo acc then array 5 + 10 .... ans hoilo 15

// arrow function diya koira dekhi

const val1 = [1, 2, 3]

const val2 = val1.reduce( (acc, curval) => acc + curval , 0)                      // arrow pore direct koira disi

console.log(val2);


const shopping = [
    {
        itemName : 'Js course',
        price : 299
    },
    {
        itemName : 'Data science course',
        price : 399
    },
    {
        itemName : 'python course',
        price : 499
    },
    {
        itemName : 'Ruby course',
        price : 599
    },
    {
        itemName : 'java course',
        price : 699
    }
]

// const price = 

const totalPrice = shopping.reduce((total , shoppingCart )=>{
    // const price = shoppingCart.price
        return total + shoppingCart.price;
},0)

console.log(totalPrice);

const userBook = shopping.filter((item)=>{
    if(item.price == "399"){
        return item
    }
})

console.log(userBook);                         // implicit return o korte parmo