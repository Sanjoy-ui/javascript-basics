// date decleared january , 1970..er pore oi accept

let date = new Date()
console.log(date);
console.log(date.toString());

console.log(typeof date); // obj

let myCreatedDate = new Date(2025 , 12  , 21)

console.log(myCreatedDate.toDateString());

let myNewDate = new Date("2025-7-01")
console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp); // Date.now hoile kda agay hoise tar  jonno.. poll banibar jonno use hoi.. k age answer dise
   // millisecond value aibo answer

console.log(myCreatedDate.getTime());

console.log(Date.now());

console.log(Date.now() / 1000);

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default' , {
    weekday : "long",
})