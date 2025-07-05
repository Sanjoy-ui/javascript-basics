// for in
// recommended for object iterations

const myObject = {
    name : "sanjoy",
    email : "sanjoy@404.com",
    age: 19,
    isLoggedIn : true
}
for (const key in myObject) {
    // console.log(key , myObject[key]);     // eda to noraml key aiya porse
}


// array 

const programming = ["js","cpp","java","ruby"];

for (const key in programming) {
//    console.log(programming[key]);
    console.log(key);      // for in only key oi loi
}