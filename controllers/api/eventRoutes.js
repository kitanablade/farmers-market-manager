const express = require('express');
const router = express.Router();
const {Event,Vendor} = require('../../models');

//get all events
router.get("/",(req,res)=>{
    Event.findAll({
        include:[Vendor]
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

//return one vendor by id
router.get("/:id",(req,res)=>{
    Event.findOne({
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