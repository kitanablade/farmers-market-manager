document.querySelector("#new-product-form").addEventListener("submit",e=>{
    e.preventDefault();
    const productObj = {
        productName: document.querySelector("#update-product-name").value,
        description: document.querySelector("#udpate-description").value,
        inStock: document.querySelector("#udpate-inStock").value,
    }
    fetch("/api/products/",{
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