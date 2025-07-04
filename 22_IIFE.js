// Immidiately Invoked Function Expression 

// named IIFE eda

(function chai(){
    console.log(`Db connected`);
})();  // function re rap koira laisi.. ( ) diya..

// unnamed IIFE eda

(()=>{
    console.log(`server is ruuning at port 3000`);
})() ; 

// parameter IIFE 

((name)=> {   // variable o deon jai
    console.log(`${name} welcome to website`); 
})('sanjoy');              // pass oi koira dissi 