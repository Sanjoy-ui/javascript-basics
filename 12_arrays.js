// javascript er array te same datatype na hoile to hoibo
// size mention na koira jodi new array add kori ..... eda o accept korboi

const myArr = [1, 2, 3, 4, 5]; // normal array // array starts from index 0
console.log(myArr[0]);

const hero = ["Spiderman", "ironman", "hulk"];
console.log(hero[2]);

//js a variable banaiya o array create korte parmu

const myArr2 = new Array(1, 2, 3, 4, 5);

console.log(myArr2[3]);

// array bitore o array  create korte parmu

// Array Methods
myArr.push(6); // .push() method array r modhe new element add kore last position e
console.log(myArr);

myArr.pop();
console.log(myArr); // .pop() method last element remove koira de

const newArr = [5, 6, 7, 8, 9];

newArr.unshift(9); //  unshift() use korle argument.. j element dimu oi element ta first a add hoiya jaibo.. index 0 te
console.log(newArr);

console.log(newArr.shift()); // shift() use korle first elment ta delete hoiya jai.. argrument a kichu lekhon lakto na
console.log(newArr.includes(8)); // shift() use korle first elment ta delete hoiya jai.. argrument a kichu lekhon lakto na
console.log(newArr.includes(2)); // bhul o lekha deklam false aise .. element na thakle false dibo

const anotherArray = [100, 200, 300, 400, 500];

console.log(anotherArray.indexOf(300)); // argument element ta kon index e ase check kore

console.log(anotherArray.join()); // join() use korle array number datatype thika.. string a convert koira dibo
const hello = anotherArray.join();
console.log(typeof hello); // type o check koira laisi

// slice splice

const testArray = [11, 22, 33, 44, 55];
console.log("A", testArray);
const newTestArray = testArray.slice(1, 3); // slice() er kaj hoibo argrument j (1, 3)- index lekmu...
//index 1 thik ka 3 index er age ja ase sob print hoibo.. but 3 index the print hoito na
console.log(newTestArray);
console.log(newTestArray.slice(1, 4)); // same print koira deklam kam hoi ni

const newTestArray2 = testArray.splice(1, 3); // splice() hoilo argument (1, 3) j leksi index 1 thika 3 pojonto print hoibo
// print korlam

console.log(newTestArray2);
// difference hoilo slice r splice
// slice a main array change hoina
// splice a main array ta change hoiya jai./
