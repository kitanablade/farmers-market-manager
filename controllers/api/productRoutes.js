const express = require('express');
const router = express.Router();
const {Product, Vendor} = require('../../models');


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

module.exports = router;