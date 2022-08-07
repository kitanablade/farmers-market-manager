const express = require('express');
const router = express.Router();
const apiRoutes = require("./api");
const handlebrs = require('express-handlebars');
//const frontend = require('./frontend')

router.use("/api",apiRoutes)
//router.use(frontend)

//renders events
router.get('/',(req,res)=>{
    res.render("home")
})

//log in route
router.get("/login",(req,res)=>{
    res.render("login")             // Don't think we need this BECAUSE there is already a form that pops up when you click the login button
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

//I dont think we need this because you should only get to update a product IF you are logged in as a vendor...
router.get("/update-product",(req,res)=>{
    res.render("updateProduct")
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//find one event's vendors (hoping to add products associated with each vendor)
router.get("/event/:id",(req,res)=>{
    Event.findByPk(req.params.id,{
        include:[Vendor]
    }).then(data=>{
        const hbsData = data.toJSON()
        console.log(hbsData)
        res.render("eventPage",hbsData)
    })
});

//Vendor List: Includes all vendors
router.get('/vendor',(req,res)=>{
    Vendor.findAll({
    }).then(data=>{
        const hbsData = data.map(modelIns=>modelIns.toJSON())
        res.render("vendors",{
            vendors:hbsData
        })
    })
});

//get one Vendor. Shows related products

router.get('/vendor/:id',(req, res)=>{
    Vendor.findByPk(req.params.id,{
        include:[Product]
    }).then(data=>{
        const hbsData = data.toJSON()
        console.log(hbsData)
        res.render("vendorPage",hbsData)
    })
})

router.get('/event',(req,res)=>{
    Event.findAll({
    }).then(data=>{
        const hbsData = data.map(modelIns=>modelIns.toJSON())
        res.render("allEvents",{
            events:hbsData
        })
    })
});
module.exports = router;