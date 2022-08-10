document.querySelector("#editProfile").addEventListener("click",e=>{
    e.preventDefault();
    // e.stopImmediatePropagation;
    console.log("working")
    let flag = document.getElementById("userContent")
    if(flag.style.display==="none"){
        console.log("working2")
        flag.style.display="block";
    } else{
        flag.style.display = "none";
    }
})

document.querySelector("#editEvents").addEventListener("click",e=>{
    e.preventDefault();
    // e.stopImmediatePropagation;
    console.log("working")
    let flag = document.getElementById("userEvents")
    if(flag.style.display==="none"){
        console.log("working2")
        flag.style.display="block";
    } else{
        flag.style.display = "none";
    }
})

document.querySelector("#editProducts").addEventListener("click",e=>{
    e.preventDefault();
    // e.stopImmediatePropagation;
    console.log("working")
    let flag = document.getElementById("userProducts")
    if(flag.style.display==="none"){
        console.log("working2")
        flag.style.display="block";
    } else{
        flag.style.display = "none";
    }
})

document.querySelector("#editBtn").addEventListener("click",e=>{
    e.preventDefault();
    // e.stopImmediatePropagation;
    console.log("working")
    let flag = document.getElementById("editMenu")
    
})