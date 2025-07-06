const form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();     // form server e request try korbo default behavior eda stop kormo 
    const height =parseInt( document.getElementById("height").value);         // .value diya input content access hoi
    const weight =parseInt( document.getElementById("weight").value);
    const button = document.querySelector("button");
    const results = document.getElementById("results")

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerText = `please enter valid Height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerText =   `please enter valid Height ${weight}`
    }
    else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2) ;                               // weight * height

        if (bmi < 18.6) {
            results.innerHTML = `<span>${bmi} is under weight </span>`
        } else if(bmi >= 18.6 && bmi <= 24.9){
            results.innerHTML = `<span>${bmi} is normal </span>`
        }
         else if( bmi >= 24.9){
            results.innerHTML = `<span>${bmi} is overWeight </span>`
        }

        
    }



})