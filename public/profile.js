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
        getAllEvents();
    } else{
        flag.style.display = "none";
    }
})

document.querySelector("#addProducts").addEventListener("click",e=>{
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

// function getAllEvents(){
//     fetch("/api/events/only",{
//         method:"GET",
//         body:JSON.stringify(productObj),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     }).then(res=>{
//         if(res.ok){
//             res.json().then(json => {
                
//                 location.href = `/profile`
//               });
//         } else {
//             res.status(404)
//         }
//     })
// }