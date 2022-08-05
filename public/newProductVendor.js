document.querySelector("#new-product-form").addEventListener("submit",e=>{
    e.preventDefault();
    const productObj = {
        product_name: document.querySelector("#new-product-name").value,
        desc: document.querySelector("#new-desc").value,
        stock: document.querySelector("#new-stock").value,
        price: document.querySelector("#new-price").value,
        unit: document.querySelector("#new-unit").value,
        // img_url: document.querySelector("#new-img-url").value,
    }
    fetch("/api/vendors/new-product",{
        method:"POST",
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