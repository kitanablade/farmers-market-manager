const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const {Event, Vendor, Product} = require('../../models');


//get all vendors
router.get("/",(req,res)=>{
    Vendor.findAll({
        include:[Event,Product]
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

//return one vendor by id
router.get("/:id",(req,res)=>{
    Vendor.findOne({
        where:{
            id: req.params.id
        },
        include:[Product]
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

//create a new vendor
router.post("/",(req,res)=>{
    // if(req.session.User){
    //     return res.status(403).json({msg:`alreayd logged in as ${req.session.Vendor.vendor_name}`})
    // }
    Vendor.create({
        vendorName:req.body.vendorName,
        email:req.body.email,
        password:req.body.password,
        description:req.body.description,
    }).then(data=>{
        res.json(data)
        console.log(req.session)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

router.post("/:vendorId/events/:eventId",(req,res)=>{
    Vendor.findByPk(req.params.vendorId).then(data=>{
        data.addEvent(req.params.eventId).then(()=>{
            res.json(data)
        }).catch(err=>{
            console.log(err);
            res.status(400).json({msg:"Cannot add this event"})
        })
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})

//update a vendor
router.put("/:id",(req,res)=>{
    if(!req.session.vendor){
        return res.status(403).json({msg:"Login first to update your account!"})
    }
    Vendor.findByPk(req.params.id).then(data=>{
        const foundVendor = data.toJSON()
        if(!foundVendor){
            return res.status(404).json({msg:"no such vendor"})
        }
        if(foundVendor.id!==req.session.vendor.id){
            return res.status(403).json({msg:"This account belongs to another vendor."})
        }
        Vendor.update({ 
            where:{
                id:req.params.id
            },
            vendorName:req.body.vendorName,
            email:req.body.email,
            password:req.body.password,
            description:req.body.description,
        }).then(data=>{
            res.json(data)
        }).catch(err=>{
            res.status(500).json({msg:"ERROR",err})
        })
    }).catch(err=>{
        console.log(err)
        res.status(500).json({msg:"ERROR",err})
    })
})

//vendor login
router.post("/login",(req,res)=>{
    Vendor.findOne({
        where:{
            email:req.body.email
        }
    }).then(foundVendor=>{
        if(!foundVendor){
            return res.status(401).json({msg:"invalid login credentials"})
        }
        if(!bcrypt.compareSync(req.body.password,foundVendor.password)){
            return res.status(401).json({msg:"invalid login credentials"})
        }
        req.session.vendor={
            id:foundVendor.id,
            vendorName:foundVendor.vendorName,
            email:foundVendor.email
        }
        return res.status(200).json(foundVendor)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

//delete Vendor
router.delete("/:id",(req,res)=>{
    // if(!req.session.Vendor){
    //     return res.status(403).json({msg:"login first to delete this Vendor account."})
    // }
    Vendor.findOne({
        where:{
            id:req.params.id
        }
    }).then(data=>{
        // if(req.session.Vendor.id === data.Vendor.id){
            Vendor.destroy({
                where:{
                    id:req.params.id
                }
            })
        // }
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

router.delete("/:vendorId/tags/:tadId", (req, res) => {
    vendor.findByPk(req.params.vendorId).then(data => {
        data.removeTag(req.params.tagId).then(() => {
            res.json(data);
        }).catch(err => {
            console.log(err);
            res.status(400).json({mes: "cannot remove this tag, sorry"})
        })
    }).catch(err => {
        res.status(500).json({mes: "whoops, lol", err})
    })
});

module.exports = router;