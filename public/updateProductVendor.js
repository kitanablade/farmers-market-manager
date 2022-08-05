document.querySelector("#update-product-form").addEventListener("submit",e=>{
    e.preventDefault();
    const productObj = {
        product_name: document.querySelector("#update-product-name").value,
        desc: document.querySelector("#udpate-desc").value,
        stock: document.querySelector("#update-tock").value,
        price: document.querySelector("#update-price").value,
        unit: document.querySelector("#update-unit").value,
        // img_url: document.querySelector("#update-img-url").value,
    }
    fetch("/api/vendors/update-product",{
        method:"PUT",
        body:JSON.stringify(productObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            res.json().then(json => {
                console.log(json.id);
                location.href = `/api/products/${json.id}`
              });
        } else {
            res.status(404)
        }
    })
})