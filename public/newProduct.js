var imgUrl = "https://cdn.dribbble.com/userupload/2942840/file/original-43e13aef290e1e7fb39bf06051313f34.jpg?resize=400x0";

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

document.getElementById("upload_widget_product").addEventListener("click", e=>{
  e.preventDefault();
  e.stopPropagation();
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
