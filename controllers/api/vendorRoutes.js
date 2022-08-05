const express = require('express');
const router = express.Router();
// const {Product,Vendor} = require('../../models');
const {Event, Vendor, Product} = require('../../models');


//get all vendors
router.get("/",(req,res)=>{
    Vendor.findAll({
        include:[Product]
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
router.post("/signup",(req,res)=>{
    if(req.session.Vendor){
        return res.status(403).json({msg:`alreayd logged in as ${req.session.Vendor.vendor_name}`})
    }
    Vendor.create({
        vendor_name:req.body.vendor_name,
        email:req.body.email,
        password:req.body.password,
        location:req.body.location,
        about:req.body.about,
        events:req.body.events
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

//update a vendor
router.put("/:id",(req,res)=>{
    if(!req.session.Vendor){
        return res.status(403).json({msg:"Login first to update your account!"})
    }
    Vendor.findByPk(req.params.id).then(foundVendor=>{
        if(!foundVendor){
            return res.status(404).json({msg:"no such vendor"})
        }
        if(foundVendor.VendorId!==req.session.Vendor.id){
            return res.status(403).json({msg:"This account belongs to another vendor."})
        }
        Vendor.update({ 
            where:{
                id:req.params.id
            },
            vendor_name:req.body.vendor_name,
            email:req.body.email,
            password:req.body.password,
            location:req.body.location,
            about:req.body.about,
            events:req.body.events
        }).then(data=>{
            res.json(data)
        }).catch(err=>{
            res.status(500).json({msg:"ERROR",err})
        })
    }).catch(err=>{
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
        req.session.user={
            id:foundVendor.id,
            username:foundVendor.username,
            email:foundVendor.email
        }
        return res.status(200).json(foundVendor)
    }).catch(err=>{
        
        res.status(500).json({msg:"ERROR",err})
    })
})

//create a new product
router.post("/new-product",(req,res)=>{
    if(!req.session.Vendor){
        return res.status(403).json({msg:"Login first to create a new product!"})
    }
    Product.create({
        product_name:req.body.product_name,
        desc:req.body.desc,
        stock:req.body.stock,
        price:req.body.price,
        unit:req.body.unit,
        img_url:req.bodyimg_url
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

//update a product
router.put("/:id",(req,res)=>{
    if(!req.session.Vendor){
        return res.status(403).json({msg:"Login first to create a new product!"})
    }
    Product.findByPk(req.params.id).then(foundProduct=>{
        if(!foundProduct){
            return res.status(404).json({msg:"no such Vendor"})
        }
        if(foundProduct.VendorId!==req.session.Vendor.id){
            return res.status(403).json({msg:"This product belongs to another vendor."})
        }
        Product.update({ 
            where:{
                id:req.params.id
            },
        product_name:req.body.product_name,
        desc:req.body.desc,
        stock:req.body.stock,
        price:req.body.price,
        unit:req.body.unit,
        img_url:req.bodyimg_url
        }).then(data=>{
            res.json(data)
        }).catch(err=>{
            res.status(500).json({msg:"ERROR",err})
        })
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

//delete Vendor
router.delete("/:id",(req,res)=>{
    if(!req.session.Vendor){
        return res.status(403).json({msg:"login first to delete this Vendor account."})
    }
    Vendor.findOne({
        where:{
            id:req.params.id
        }
    }).then(data=>{
        if(req.session.Vendor.id === data.Vendor.id){
            Vendor.destroy({
                where:{
                    id:req.params.id
                }
            })
        }
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

//delete product from Vendor inventory
router.delete("/:id",(req,res)=>{
    if(!req.session.Vendor){
        return res.status(403).json({msg:"login first to delete a product"})
    }
    Product.findByPk(req.params.id).then(foundProduct=>{
        if(!foundProduct){
            return res.status(404).json({msg:"no such Vendor"})
        }
        if(foundProduct.VendorId!==req.session.Vendor.id){
            return res.status(403).json({msg:"This product belongs to another vendor."})
        }
        Product.destroy({
            where:{
                id:req.params.id
            }
        }).then(data=>{
            res.json(data)
        }).catch(err=>{
            res.status(500).json({msg:"ERROR",err})
        })
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
   
})


module.exports = router;