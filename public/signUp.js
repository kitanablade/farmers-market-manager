document.querySelector("#signup-form").addEventListener("submit",e=>{
    e.preventDefault();
    const vendorObj = {
        vendorName: document.querySelector("#signup-username").value,
        email: document.querySelector("#signup-email").value,
        password: document.querySelector("#signup-password").value,
        description: document.querySelector("#signup-location").value,
    }
    fetch("/api/vendors/",{
        method:"POST",
        body:JSON.stringify(vendorObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            res.json().then(json => {
                console.log(json.id);
                location.href = `/api/vendors/${json.id}`
              });
        } else {
            res.status(404)
        }
    })
})

//event selection data route mock up
document.querySelector("#signup-form").addEventListener("submit",e=>{
    e.preventDefault();
    const eventObj = {
        //event selection handler
    }
fetch("/api/vendors/:id/events/:id",{
    method:"POST",
    body:JSON.stringify(eventObj),
    headers:{
        "Content-Type":"application/json"
    }

}).then(res=>{
    if(res.ok){
        res.json().then(json => {
            console.log(json.id);
            location.href = `/api/vendors/${json.id}`
          });
    } else {
        res.status(404)
    }
})
})