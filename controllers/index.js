const express = require('express');
const router = express.Router();
const apiRoutes = require("./api");
const frontend = require("./frontend");
const handlebrs = require('express-handlebars')

router.use("/api", apiRoutes)
 router.use("/", frontend)


//renders events
router.get('/',(req,res)=>{
    res.render("home")
})

//log in route
router.get("/login",(req,res)=>{
    res.render("login")
})

//vendor sign up route
router.get("/vendor-signup",(req,res)=>{
    res.render("signupVendor")
})

//create product for vendor
router.get("/create-product",(req,res)=>{
    if(!req.session.vendor){
                res.redirect("/login")
            }
    res.render("createProduct")
})

//update product for vendor
router.get("/update-product",(req,res)=>{
    //need to allow only if req.session.vendor.id === product.VendorId
    if(!req.session.vendor){
        res.redirect("/login")
    }
    res.render("updateProduct")
})

//render event by id
router.get("/update-product",(req,res)=>{
    res.render("updateProduct")
})

//render vendors by event
router.get("/event/vendors",(req,res)=>{
    res.render("event")
})

//products by events
router.get("/",(req,res)=>{
    Event.findAll({
        include:[Vendor,Product]
    }).then(data=>{
        res.json(data);
    })
})

module.exports = router;