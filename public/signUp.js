let logoUrl = "";

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
        logo_url:logoUrl
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
                res.json().then(vendor => {
                    console.log(vendor);
                    // location.href = `/vendor/${vendor.id}`
                //should change the content of the side jumbo to alert user they created an account
                    // jumbo.innerHTML='Successfully created a user';
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