// Stack  (primitive), Heap (non-premetive)--refrence hoi heap a

let myGameName = "Nexus"

let anotherName = myGameName

anotherName = "sanjoy"

console.log(myGameName);
console.log(anotherName);


let UserOne = {
    email:  "sanjoy@google.com",
    upi: "user@pnb"
}

let UserTwo =UserOne

UserTwo.email = "sanjoy@iut.com"

console.log(UserOne.email);

console.log(UserTwo.email);