document.querySelector("#vendor-login-form").addEventListener("submit",e=>{
    e.preventDefault();
    const vendorObj = {
        email: document.querySelector("#login-email").value,
        password: document.querySelector("#login-password").value,
    }
    fetch("/api/vendors/login",{
        method:"POST",
        body:JSON.stringify(vendorObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            res.json().then(json => {
                console.log(json.id);
                location.href = `vendors/${json.id}`
              });
        } else {
            res.status(404)
        }
    })
})