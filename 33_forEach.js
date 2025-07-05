const coding = ["js" , "ruby","swift","java","cpp"];

// coding.forEach( function sanjoy () {} )

// call back reference

// --- function er name thake na


 coding.forEach(function (item) {            // coding ---array er name. forEach() - loop - function - jar nam nai 
                                                 // function (iteam) - ().. argument er bitore jsa kichu lekte parbo..
   console.log(item);                                           // jda oi lekhmu eda decleared korbo array re    

  } )

coding.forEach((items)=>{
    console.log(items);
})

const array = [1,2,3,4,5];

array.forEach(function (val){
    console.log(val);
})


// arrow function diya

const num1 = [1, 2, 3, 4]            //  array decleared

num1.forEach( (nums) =>{                   // array name . for each loop().. bitore arrow function ()=>{}  
 console.log(nums);                          // print 
} )



const coding2 = [10,20,30,40,50,60];

coding2.forEach((item , index , arr)=>{
    console.log(item , index , arr);   // array name. for each loop ()    .. arrow function (iteam - kita ase)
})   // index, arr



const myCoding = [   
    {
        languageName : 'Javascript',
        languageFileName : " js"
    },
    
    {
         languageName : 'Java',
        languageFileName : " java"
    },

    {
         languageName : 'Python',
        languageFileName : " Py"
    }
]


myCoding.forEach((item)=>{
    console.log(item.languageFileName);  // item er kita lage . dot diya lekte o parmuk
})