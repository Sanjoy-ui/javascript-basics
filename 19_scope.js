let a = 10;
let b= 20;
let c = 30;

// {}  eda hoilo scope4

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "sanjoy Deb"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()



if(true){
    const username = "Rahul Deb";
    if(username === "Rahul Deb"){
        const website =  " google";
        console.log(username + website);
    }
}




console.log(addOne(5));
function addOne(num){
    return num + 1;
}

//addTwo(5)  //Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2;

}
console.log(addTwo(9))