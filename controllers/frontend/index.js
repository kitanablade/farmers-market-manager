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

//find one event's vendors and products
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
router.get('/vendor/:id',(req, res)=>{
        // if(!req.session.loggedIn){
        Vendor.findByPk(req.params.id,{
            include:[Product]
        }).then(data=>{
            const hbsData = data.toJSON()
            res.render("vendorPage",hbsData)
        })
        // console.log("not logged in")
        // } if(req.session.vendor.id){
        //      Vendor.findByPk(req.session.vendor.id,{
        //             include:[Product]
        //         }).then(data=>{
        //             const hbsData = data.toJSON()
        //             console.log(hbsData)
        //             res.render("profile",hbsData)
        //         })
        //         }
});

router.get('/profile', (req, res)=>{
    console.log(req.session)
    if(!req.session.loggedIn){
        res.redirect("/event")
    } else{
        if(req.session.vendor.id){
             Vendor.findByPk(req.session.vendor.id,{
                    include:[{model: Product}]
                }).then(data=>{
                    const hbsData = data.toJSON()
                    console.log(hbsData)
                    res.render("profile",hbsData)
                })
            }
        }
})

//get one Vendor. Shows related products
router.get('/product/:id',(req, res)=>{
    Product.findByPk(req.params.sid,{
        include:[Vendor]
    }).then(data=>{
        const hbsData = data.toJSON()
        console.log(hbsData)
        res.render("vendorPage",hbsData)
    })
})
module.exports = router;