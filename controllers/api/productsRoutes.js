const express = require('express');
const router = express.Router();
const {Product, Vendor} = require('../../models');
const { belongsTo } = require('../../models/Vendor');


//get all Products
router.get("/",(req,res)=>{
    Product.findAll({
        include:[Vendor]
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

router.post("/",(req,res)=>{
    if(!req.session.vendor){
        return res.status(403).json({msg:"Login first to create a new product!"})
    }
    Product.create({
        productName:req.body.productName,
        description:req.body.description,
        inStock:req.body.inStock,
        VendorId:req.session.vendor.id
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

router.delete("/:id",(req,res)=>{
    // if(!req.session.vendor){
    //     if(!req.session.vendor){
    //         res.redirect("/login")
    //     }
    // }
    // if(!req.Product.id.belongsTo(req.body.user)){
    //     return res.status(403).json({msg:"Can't delete another vendor's product"})
    // }
    Product.destroy({
        where:{
            id:req.session.Product.id
                },
            });
            })
//get one Product
router.get("/:id",(req,res)=>{
    Product.findOne({
        where:{
            id: req.params.id
        },
        include:[Vendor]
    }).then(data=>{
        res.json(data)
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