let logoUrl = ""

document.querySelector("#update-vendor-form").addEventListener("submit",e=>{
    e.preventDefault();
    const vendorObj = {
        vendorName: document.querySelector("#signup-username").value,
        email: document.querySelector("#signup-email").value,
        password: document.querySelector("#signup-password").value,
        description: document.querySelector("#signup-location").value,
        logo_url:logoUrl
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

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'hawker-image-db', 
    uploadPreset: 'upload_preset'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        // console.log('Done! Here is the image info: ', result.info); 
        console.log(result.info.url)
        logoUrl = result.info.url
      }
    }
  )
  
  document.getElementById("upload_widget").addEventListener("click", e=>{
    e.preventDefault();
      myWidget.open();
    }, false);