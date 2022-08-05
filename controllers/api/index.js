const express = require('express');
const router = express.Router();
const productRoutes = require("./productRoutes");
const vendorRoutes = require("./vendorRoutes");
const eventRoutes = require("./eventRoutes");

router.use("/event",eventRoutes);
router.use("/vendor",vendorRoutes);
router.use("/product",productRoutes);



const {Event, Vendor, Product} = require('../../models');

router.get("/",(req,res)=>{
    Event.findAll({
        include:[Vendor,Product]
    }).then(data=>{
        res.json(data);
    })
})

module.exports = router;