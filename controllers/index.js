const express = require('express');
const router = express.Router();
const apiRoutes = require("./api");
const handlebrs = require('express-handlebars');
const {Event, Product, Vendor}= require('../models');

//renders events
router.get('/',(req,res)=>{
    Event.findAll({
    }).then(data=>{
        const hbsData = data.map(modelIns=>modelIns.toJSON())
        res.render("home",{
            events:hbsData
        })
    })

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

// //render vendors by event
// router.get("/event/vendors",(req,res)=>{
//     res.render("event")
// })

//products by events
//I think this route needs to be like:
router.get("/events/:id",(req,res)=>{
    Event.findByPk(req.params.id,{
        include:[{
            model: Vendor,
            include: [Product]
        }]
    }).then(data=>{
        const hbsData = data.map(modelIns=>modelIns.toJSON())
        console.log(hbsData);
        res.render("events",{
            events:hbsData
        })
    })
})

module.exports = router;