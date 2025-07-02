// singleton  //
// -- literals   diya object create hoile ai object da singleton hoito na
// constructor diya object create hoile ai object da singleton
// object.create    .... eda oi constructor diya hoi  sigleton

const jsUser = {
    name: "sanjoy deb",
    age: 19 ,               // key o define korte parbo , array moto 0, 1 index predefine thake na .. apni marzi
    location: "teliamura",
    isLoggedIn : true ,
    lastLogginDays : ['monday ', 'friday']
}
console.log(jsUser.name); // eda hoi but eda good programmer a kore na onnek kichu hoi na


const pyUser = {
    name : "Rahul Deb",
    age : 25,
    "location" : "Bengalore",
    isLoggedIn : false
}

// console.log( pyUser.location);  // eda koron jaito na kre key ta te string mention ase

// good approach
console.log( pyUser["location"]);  // object[""]   PyUser["location"]

const mySym = Symbol("1time") // Symbol("")    ai bhabe symbol datatype decleared kore
console.log(typeof mySym);


const javaUser = {
    name : "sanjoydeb",
    sym : Symbol("404"), // decleared korsi symbol
    age : 19,
    email :"sanjoydeb404@gmail.com"
}
console.log(javaUser.sym);  // object.name
 
console.log(typeof javaUser.sym);  //   type kita deksi

javaUser.email = "tder404@gmail.com"    // object.value dile object er value change korte parmu

console.log(javaUser.email);
console.log(javaUser["email"]);

Object.freeze(javaUser) // object.freeze() use korle oi object ta change hoito na .. freeze hoiya jaibo....  r argument a object er  name dite hoibo 
javaUser.email = "anjndkjdnc@gmail.com" 
console.log(javaUser.email);  // change hoito na object,freeze jonno.. but change decleared korle error o dito na
 // propagate hoito na
 console.log(javaUser);

 const goLangUser = {
    name: "rahul ",
    age:25,

 }

 // javascript er bitore functiion re discrimination hoi na 
// variable babhe o  decleared korte parmu
//getting just ekta variable er nam
//scope of variable

goLangUser.getting = function(){  // object.getting eda normal er pore function() define kormu jamne kore
    console.log("hello golang user");
}
console.log(goLangUser.getting());   // printing er somoi getting re method () banaiya dio... naile run hoito na

goLangUser.greetings = function(){
    console.log(`how are you ${this.name}`);  // dollar symbol { this. variable name leksi} this kare karon tar eda {this.variableName31e`jh}
}

console.log(goLangUser.greetings());// object litterals edi
console.log(goLangUser);
