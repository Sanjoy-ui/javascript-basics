const name = "sanjoy"
const repoCount = 4;
// console.log(name + repoCount);  //outdated  use kortam na amon
// use backticks   ``
// string interpolation   means placeholder
// ****************************************************************************
console.log(`hello my name is ${name} and my repo count is ${repoCount} `);  //******** Eda most important for string variable
//***************************************************************************
const gameName = new String("sanjoy-hc-com")
console.log(gameName[0]);   //  0 position kita ase

console.log(gameName.__proto__); // datatype kita

console.log(gameName.length); // length kita string r

console.log(gameName.toUpperCase()); // uppercase e convert kore

console.log(gameName.charAt(3)); // ai position e kun character ase

console.log(gameName.indexOf('h')); //  ai character kun position e ase

const newString = gameName.substring(0,4)  // string re sub string a convert korsi  0--- start ,,,,,, 4 hoilo end
console.log(newString);

const anotherString = gameName.slice(-8 ) //negative kora jai 

console.log(anotherString)

const newStringOne = "   sanjoy     "
console.log(newStringOne);
console.log(newStringOne.trim());   // white space remove kore

const url = "http://sanjoy.com/sanjoy%20deb"

console.log(url.replace('%20' , '-'));   // .replace('jjda change kortam',   'jda set hoibo')

console.log(url.includes('sanjoy'));   // .include (sujan)  mane url  e eda  ase ni returns boolean value

console.log(url.split('/')); //. split j ase eda split('jda da thabo) eda re  array te convert koira dibo part part a