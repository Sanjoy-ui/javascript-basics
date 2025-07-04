const user = {
    username : "sanjoy deb",
    age : 19 ,
    welcome : function(){
        console.log(` ${this.username} welcome to website`);  // this dile.. ai {} er value da depent koira oi output dibo
    }
}
user.welcome()  // value kintu return deon lakbo oi

user.username = "Rahul Deb";  

user.welcome()  // rahul print hoibo sam da content er baire

// global object kintu window object

function chai(){
    console.log(this);
}
chai()