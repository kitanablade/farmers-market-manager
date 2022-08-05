const express = require('express');
const router = express.Router();
const {Products, Vendors} = require('../../models');
const { belongsTo } = require('../../models/Vendor');

router.get("/",(req,res)=>{
    Products.findAll({
        include:[Vendors]
        //WHERE event = blah
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

router.post("/",(req,res)=>{
    Products.create({
        productName:req.body.productName,
        description:req.body.description,
        //vendors.Id
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

router.delete("/:id",(req,res)=>{
    // if(!req.session.vendors){
    //     if(!req.session.vendors){
    //         res.redirect("/login")
    //     }
    // }
    // if(!req.Products.id.belongsTo(req.body.user)){
    //     return res.status(403).json({msg:"Can't delete another vendor's products"})
    // }
    Products.destroy({
        where:{
            id:req.session.Products.id
                }
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})



module.exports = router;