const express = require('express');
const router = express.Router();
const {Event,Vendor,Product} = require('../../models');

//get all events and their vendors
router.get("/",(req,res)=>{
    Event.findAll({
        include:[Vendor]
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
})

//get only events with no other data
router.get("/only",(req,res)=>{
    Event.findAll({
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

router.post("/:eventId/vendors/:vendorId",(req,res)=>{
    Event.findByPk(req.params.eventId).then(data=>{
        data.addVendor(req.params.vendorId).then(()=>{
            res.json(data)
        }).catch(err=>{
            console.log(err);
            res.status(400).json({msg:"Cannot add this vendor"})
        })
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