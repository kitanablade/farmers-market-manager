var imgUrl = "https://res.cloudinary.com/hawker-image-db/image/upload/v1659995561/zkwtm7jmgid1uay9u3kd.png";

var myWidget = cloudinary.createUploadWidget({
  cloudName: 'hawker-image-db', 
  uploadPreset: 'upload_preset'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      // console.log('Done! Here is the image info: ', result.info); 
      console.log(result.info.url)
      imgUrl = result.info.url
    }
  }
)

document.getElementById("upload_widget").addEventListener("click", e=>{
  e.preventDefault();
    myWidget.open();
  }, false);

document.getElementById("btnAddProduct").addEventListener("click",e=>{
    e.preventDefault();
    const productObj = {
        productName: document.querySelector("#update-product-name").value,
        description: document.querySelector("#update-description").value,
        inStock: eval(document.querySelector("#update-inStock").value),
        img_url:imgUrl
    }
    console.log("BUTTON PRESSED")
    fetch("/api/products",{
        method:"POST",
        body:JSON.stringify(productObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            res.json().then(json => {
                console.log(json.id);
                location.href = `/profile`
              });
        } else {
            res.status(404)
        }
    })
})
