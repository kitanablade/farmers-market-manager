document.querySelector("#addEventBtn").addEventListener("click",e=>{
    const vendorId = e.target.getAttribute("data-vendorId");
    const eventId = e.target.getAttribute("data-eventId");
    fetch(`/:${vendorId}/events/:${eventId}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("Event successfully added.")
        }
    })
})