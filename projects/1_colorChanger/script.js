const buttons = document.querySelectorAll(".button");
// console.log(buttons);

const body = document.body ;

buttons.forEach((button)=>{

    // console.log(button);
    button.addEventListener('click', (e)=>{
        // console.log(e.target)
        if (e.target.id === 'grey') {
            body.style.backgroundColor = 'grey';
        } else if(e.target.id=== 'white'){
             body.style.backgroundColor = e.target.id ;    // good programmer amne leke
        }
        else if(e.target.id=== 'blue'){
             body.style.backgroundColor = 'blue';
        }
        else if(e.target.id === 'yellow'){
             body.style.backgroundColor = 'yellow';
        }
    })

})



