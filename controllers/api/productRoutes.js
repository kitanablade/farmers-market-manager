const express = require('express');
const router = express.Router();
const {Product, Vendor} = require('../../models');
const { belongsTo } = require('../../models/Vendor');

router.get("/",(req,res)=>{
    Product.findAll({
        include:[Vendor]
        //WHERE event = blah
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

router.post("/",(req,res)=>{
    Product.create({
        productName:req.body.productName,
        description:req.body.description,
        //vendor.Id
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
                }
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})



module.exports = router;