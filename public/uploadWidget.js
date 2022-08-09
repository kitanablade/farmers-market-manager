var myWidget = cloudinary.createUploadWidget({
    cloudName: 'hawker-image-db', 
    uploadPreset: 'upload_preset'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        // console.log('Done! Here is the image info: ', result.info); 
        console.log(result.info.url)
        const logoUrl = result.info.url
      }
    }
  )
  
  document.getElementById("upload_widget").addEventListener("click", e=>{
    e.preventDefault();
      myWidget.open();
    }, false);