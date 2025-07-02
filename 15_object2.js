const jsUser = new Object() // // ai bhabe o amra object create korte parmu
const PyUser = {}              // ai bhabe to korsi oi

console.log(jsUser);
console.log(PyUser);   // 2ta khali array ailo

// new object create kori new bhabe j korsu

const iut = new Object()
iut.name = "sanjoy";
iut.id = 24242424 ;
iut.email = "xxx@gmail.com"

console.log(iut);
console.log(iut.name);

// nested object koron jai js er bitore

const regularUser = {
    fullName : {
        username : {
            firstName : "sanjoy",
            lastName : "deb"
        }
    }
}
console.log(regularUser);   // first object print
console.log(regularUser.fullName);   // first object er 1st nested object print
console.log(regularUser.fullName.username);  // first object er 1st nested ... bitore j r ekta nested object j ase take print

const obj1 = { 1 : "a" , 2: "b"}
const obj2 = { 3 : "c" , 4 : "d"}
const obj3 = { 5: "e" , 6:"f"}

const obj4 = {obj1 , obj2} // merge korsi.. but 2 ta alada alada print hoise
console.log(obj4);  
 
const obj5 = Object.assign(obj1 , obj2 , obj3)   // Object.assign() use korle objects ti ekta object a create  hoiya jai
console.log(obj5);

 
const obj6 = Object.assign({} , obj1 , obj2 , obj3)      // good programming a ekta {} blank carly brackets use korle bhalo
console.log(obj6);

const obj7 = {...obj1, ...obj2,...obj3}  // spared method ta easy and  bhalo j ta array te o korsi... programmer friendly
console.log(obj7);

const tinder = new Object()  // new Object lekha tinder name a object create korsi
tinder.id = 2;
tinder.email = "sssac@.com"
tinder.isLoggedIn = true

console.log(tinder);   // tinder a ki ki ase deksi
 
console.log(Object.keys(tinder));  // Object.keys() korle ()-- arguments er bitore object er nam lekle (tinder) keys ti show kore as a array
console.log(Object.values(tinder)); //only values ti array format  a aibo

console.log(Object.entries(tinder));   // Object.entries() dile object er sob key r value individually ekta ekta array a show hoibo.. first ta key second one value

console.log(tinder.hasOwnProperty("email"));  // object er name tinder.hasOwnProperty() dile -- argument j lekmu edi object a ase ni eda koibo boolean a