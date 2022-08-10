const express = require('express');
const router = express.Router();
const handlebrs = require('express-handlebars');
const { isLength } = require('lodash');
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
        hbsData.isLoggedIn=req.session.loggedIn
        console.log(hbsData)
        res.render("home",{
            events:hbsData,
        })
    })
})

//find one event's vendors and products
router.get("/event/:id",(req,res)=>{
    Event.findByPk(req.params.id,{
        include:[{
            model:Vendor,
            include:[Product]}]
    }).then(data=>{
        const hbsData = data.toJSON()
        hbsData.isLoggedIn=req.session.loggedIn
        console.log(hbsData)
        res.render("eventPage",hbsData)
    })
});


router.get('/event',(req,res)=>{
    Event.findAll({
    }).then(data=>{
        const hbsData = data.map(modelIns=>modelIns.toJSON())
        hbsData.isLoggedIn=req.session.loggedIn
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
        hbsData.isLoggedIn=req.session.loggedIn
        res.render("vendors",{
            vendors:hbsData
        })
    })
});

//get one Vendor. Shows related products
router.get('/vendor/:id',(req, res)=>{
        // if(!req.session.loggedIn){
        Vendor.findByPk(req.params.id, {
            include:[Product,Event]
        }).then(data=>{
            const hbsData = data.toJSON()
            hbsData.isLoggedIn=req.session.loggedIn
            res.render("vendorPage",hbsData)
        })
});

router.get('/profile', (req, res)=>{
    if(!req.session.loggedIn){
        res.redirect("/login")
    } else {
        Vendor.findByPk(req.session.vendor.id,{
            include:[Product,Event]
        }).then(data=>{
            console.log(data)
            const hbsData = data.toJSON()
            hbsData.isLoggedIn=req.session.loggedIn
            console.log(hbsData)
            res.render("profile",hbsData)
        }).catch(err=>{
            console.log(err)
            res.status(500).json({msg:"ERROR",err})
        })
    }
})


//get one Vendor. Shows related products
router.get('/product/:id',(req, res)=>{
    Product.findByPk(req.params.sid,{
        include:[Vendor]
    }).then(data=>{
        const hbsData = data.toJSON()
        hbsData.isLoggedIn = req.session.vendor.id
        hbsData.isLoggedIn=req.session.loggedIn
        console.log(hbsData)
        res.render("vendorPage",hbsData)
    })
})
module.exports = router;