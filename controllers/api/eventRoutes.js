const express = require('express');
const router = express.Router();
const {Event,Vendor,EventVendor} = require('../../models');

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

//return one event and its associated vendors by id
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

// Add an event
router.post("/",(req,res)=>{
    // if(!req.session.isVendor){
    //     return res.status(403).json({msg:"Only vendors can add events"})
    // }
    Event.create({
      eventName:req.body.eventName,
      location:req.body.location,
      description:req.body.description,
      vendorIds:req.body.vendorIds,
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})

router.delete("/:id",(req,res)=>{
    Event.destroy({
        where:{
            id:req.params.id
        }
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})

module.exports = router;