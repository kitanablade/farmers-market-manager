let imgUrl = "";

document.querySelector("#btnAddProduct").addEventListener("submit",e=>{
    e.preventDefault();
    const productObj = {
        productName: document.querySelector("#update-product-name").value,
        description: document.querySelector("#update-description").value,
        inStock: document.querySelector("#update-inStock").value,
        img_url: imgUrl
    }
    console.log(productObj)
    fetch("/api/products/",{
        method:"POST",
        body:JSON.stringify(productObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            console.log("====================")
            console.log(productObj);
            res.json().then(json => {
                console.log(json.id);
                location.href = `/api/products/${json.id}`
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