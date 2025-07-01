const marvel_heroes = ['spiderman' , ' ironman', 'thor'];
const dc_heroes = ['superman', 'flash', 'batman'] ;

marvel_heroes.push(dc_heroes)  // 1st array loge second array push korsi

console.log(marvel_heroes);  // ekloge aibo but merge hoito na

// array bitore r ekta array     
// output  [ 'spiderman', 'ironman', 'Thor', [ 'batman', 'flash', 'superman' ] ]
// js er bitore array bitore same data type na hoilo o hoibo... 
// string  + array that i show here.
// array re o data nise   3rd index
// array o ekta data type   hahahah


console.log(marvel_heroes[3]); // index 3 te array store hoise
console.log(marvel_heroes[3][2]); // 3 nmbr index r 2 nmbr element ta [3][2] diya access korsi

arr1 = [1, 2, 3, 4, 5]    // array created
arr2 = [6, 7, 8, 9, 10]    // array created

arr3 = arr1.concat(arr2) // .concat() use korle doita array merge hoia jai
console.log(arr3);   // ekta new oi array create hoibo ..

// alternative of concat that is spread ...arrayname, ...arrayname
//... use korle tara akhon array na ek ek element hoiya jaibo

myarr1 =[11, 12, 13, 14, 15]
myarr2 =[16, 17, 18, 19, 20]
myarr3 =[21, 22, 23, 24, 25]
myarr4 = [...myarr1 , ...myarr2,...myarr3] //  // ... ai spread use korle joto khusi oto array merge koron jaibo
console.log(myarr4);

const sanjoy = [1,2,3,[4,5], 6,7,[8,9,[10,11],12]];

const newSanjoy = sanjoy.flat(1)  // flat() use korle array re same of concat moto kore but flat(2) means koto tuk depth jaibo eda mentioned korle parmu
console.log(newSanjoy);

const secnewSanjoy = sanjoy.flat(Infinity)  // infinity argument() a lekle koto depth jaito lekhon lakto na
console.log(secnewSanjoy);

const personArr = Array.isArray(newSanjoy) // Array.isArray()   check korte parmu eda array ni
console.log(personArr);

const person2Arr = Array.from('sanjoy') //  convert koira dibo array te 
console.log(person2Arr);

console.log(Array.from({name:"sanjoy"}));  // interesting its blank object coz mention korte hoi key re .. na value .. re array te convert korte

let score1 = 100
let score2 = 200
let score3 = 300  // Array.of() use korte parmu

console.log(Array.of(score1,score2,score3));
