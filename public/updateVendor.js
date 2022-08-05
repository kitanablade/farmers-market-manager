document.querySelector("#update-vendor-form").addEventListener("submit",e=>{
    e.preventDefault();
    const vendorObj = {
        vendor_name: document.querySelector("#update-username").value,
        email: document.querySelector("#update-email").value,
        password: document.querySelector("#update-password").value,
        location: document.querySelector("#update-location").value,
        about: document.querySelector("#update-about").value,
    }
    fetch("/api/vendors/",{
        method:"PUT",
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