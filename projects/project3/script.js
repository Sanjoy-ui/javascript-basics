let clock = document.getElementById("clock")

setInterval(()=>{
    let date = new Date();

// console.log(date.toLocaleTimeString());
    let continiousTime = date.toLocaleTimeString();
    clock.innerHTML = `${continiousTime}`
},1000)