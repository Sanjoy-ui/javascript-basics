const { response } = require("express");

const promiseOne = new Promise(function(resolve , reject){
    // do an async task
    // DB calls , cryptoGraphy , network

    setTimeout(()=>{
        // console.log(`async task is completed`);
        resolve();     // resolve() method dile oi next .then() execute hoibo parameter o accept kore
    },1000)
});

promiseOne.then(function(){
    // console.log("promise consumed");
});

new Promise(function(resolve , reject ){
    setTimeout(()=>{
        // console.log("async task two conpleted");
        resolve();
    },1000)
}).then(function(){
    // console.log("promiseTwo resolved");
});


const promiseThree = new Promise(function(resolve , reject){
    setTimeout(()=>{
        resolve({username: "sanjoy deb" , age : 19});        // data send korsi .then e
    },1000)
})

promiseThree.then(function(user){
    // console.log(user.username);
    // console.log(user.age);
    // console.log(user);
});


const promiseFour = new Promise(function(resolve , reject){
    setTimeout(() => {
        let error = false ; 
        if (!error) {
            resolve({username : "sanjoy deb" , email: "sanjoydeb404@gmail.com"});
        }else {
            reject("ERROR , somthing went wrong ")
        }
    }, 1000);
});

promiseFour.then(function(user){
    // console.log(user);
    return user.username;
})  
.then((username)=>{
    // console.log(username);
})
.catch(function(error){
    // console.log(error);
})
.finally(function(){
    // console.log("the promise is either resolved or reject");
});


const promiseFive = new Promise(function(resolve , reject){
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username: "javascript" , library : "angular" })
        }
        else {
            reject("something went wrong!");
        }
    }, 1000);
});

async function consumePromiseFive(){                       // async keyword lekia edare async function banaisi 
    try {
        const response = await promiseFive;               // r await lekia edare wait korai tasi response pai br lagi from promise Five 
        // console.log(response);
    } catch (error) {
        // console.log(error);
    }
}

// consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users'); fetch r lagi alada priority queue take jeda  sob async task r age jaia run ho 

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// } ;

// getAllUsers();


fetch('https://api.github.com/users/sanjoy-ui')
.then(function(response){
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error));

