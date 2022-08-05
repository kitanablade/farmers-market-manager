const express = require('express');
const router = express.Router();
const {Event, Vendor, Product} = require('../../models');

router.get("/",(req,res)=>{
    Event.findAll({
        include:[Vendor,Product]
    }).then(data=>{
        res.json(data);
    })
})

module.exports = router;