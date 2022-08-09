const express = require('express');
const router = express.Router();
const handlebrs = require('express-handlebars');
const {Event, Product, Vendor} = require('../../models');


//renders sign-up page

router.get("/vendor/signup", (req, res)=>{
    res.render("newUserPage")
})

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
        include:[{
            model:Vendor,
            include:[Product]}]
    }).then(data=>{
        const hbsData = data.toJSON()
        console.log(hbsData)
        res.render("eventPage",hbsData)
    })
});


router.get('/event',(req,res)=>{
    Event.findAll({
    }).then(data=>{
        const hbsData = data.map(modelIns=>modelIns.toJSON())
        res.render("allEvents",{
            events:hbsData
        })
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
router.get('api/vendor/:id',(req, res)=>{
    Vendor.findByPk(req.params.id,{
        include:[Product]
    }).then(data=>{
        const hbsData = data.toJSON()
        console.log(hbsData)
        res.render("vendorPage",hbsData)
    })
})

//get one Vendor. Shows related products
router.get('/product/:id',(req, res)=>{
    Product.findByPk(req.params.id,{
        include:[Vendor]
    }).then(data=>{
        const hbsData = data.toJSON()
        console.log(hbsData)
        res.render("vendorPage",hbsData)
    })
})
module.exports = router;