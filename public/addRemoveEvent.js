// const handleClick = (event: MouseEvent) => {
//     console.log(event);
//   };
// document.getElementById("button")?.addEventListener("click", handleClick);


// import React from "react";

// const handleClick = () {
//   event: React.MouseEvent<HTMLElement>,
//   printValue: string
// ) => {
//   //event.persist();
//   console.log(event);
//   console.log(printValue);
// };

// export default function BootstrapHoverButtons() {
//   return (
//     <div className="container mt-2">
//       <div className="d-grid gap-2">
//         <button
//           className="btn btn-secondary"
//           type="button"
//           onClick={(evt) => {
//             handleClick(evt, "My Prop");
//           }}
//         >
//           Bootstrap Button
//         </button>
//       </div>
//     </div>
//   );
// }






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

document.querySelector("#deleteEventBtn").addEventListener("click",e=>{
    const vendorId = e.target.getAttribute("data-vendorId");
    const eventId = e.target.getAttribute("data-eventId");
    fetch(`/:${vendorId}/events/:${eventId}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("Event successfully deleted.")
        }
    })
})
