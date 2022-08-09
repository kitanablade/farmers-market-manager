document.querySelector("#update-product-form").addEventListener("submit",e=>{
    e.preventDefault();
    const productObj = {
        productName: document.querySelector("#update-product-name").value,
        description: document.querySelector("#update-description").value,
        inStock: document.querySelector("#update-inStock").value,
    }
    fetch("/api/products/:id",{
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