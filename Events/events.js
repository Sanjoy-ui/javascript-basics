// document.getElementById("owl").addEventListener("click" , (e)=>{
//     console.log("owl clicked");
// })

// attachEvent()

// event r
// type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode

document.getElementById("images").addEventListener("click",(e)=>{
    console.log("clicked inside the ul");
}, false);

document.getElementById("owl").addEventListener("click" , (e)=>{
    // e.stopPropagation()
    console.log("owl clicked");
},false);

 document.getElementById('google').addEventListener('click',function(e){
        e.preventDefault();
        // e.stopPropagation()
        console.log("google clicked");
    }, false)

document.getElementById('images').addEventListener("click" , (e)=>{
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeit = e.target.parentNode ; 
        removeit.remove()

    }

})

 //removeIt.parentNode.removeChild(removeIt)
