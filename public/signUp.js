document.querySelector("#signup-form").addEventListener("submit",e=>{
    e.preventDefault();
    //this should redirect the user to the home page after clicking submit 
    // document.location.href="/";
    // const jumbo = document.querySelector("#loginJumbo");
    const vendorObj = {
        vendorName: document.querySelector("#signup-username").value,
        email: document.querySelector("#signup-email").value,
        password: document.querySelector("#signup-password").value,
        description: document.querySelector("#signup-description").value,
    }
    console.log (vendorObj)
        fetch("/api/vendors",{
            method:"POST",
            body:JSON.stringify(vendorObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            if(res.ok){
                res.json().then(json => {
                    console.log(json.id);
                    location.href = `/vendor/${json.id}`
                //should change the content of the side jumbo to alert user they created an account
                    // jumbo.innerHTML='Successfully created a user';
              });
        } else {
            res.status(404)
        }
    })
})


//event selection data route mock up
// document.querySelector("#signup-form").addEventListener("submit",e=>{
//     e.preventDefault();
//     const eventObj = {
//         //event selection handler
//     }
// fetch("/api/vendors/:id/events/:id",{
//     method:"POST",
//     body:JSON.stringify(eventObj),
//     headers:{
//         "Content-Type":"application/json"
//     }

// }).then(res=>{
//     if(res.ok){
//         res.json().then(json => {
//             console.log(json.id);
//             location.href = `/api/vendors/${json.id}`
//           });
//     } else {
//         res.status(404)
//     }
// })
// })