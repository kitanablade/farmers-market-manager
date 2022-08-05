document.querySelector("#signup-form").addEventListener("submit",e=>{
    e.preventDefault();
    const vendorObj = {
        vendor_name: document.querySelector("#signup-username").value,
        email: document.querySelector("#signup-email").value,
        password: document.querySelector("#signup-password").value,
        location: document.querySelector("#signup-location").value,
        about: document.querySelector("#signup-about").value,
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