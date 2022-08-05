const express = require('express');
const router = express.Router();
const productRoutes = require("./productRoutes");
const vendorRoutes = require("./vendorRoutes");
const eventRoutes = require("./eventRoutes");

router.use("/event",eventRoutes);
router.use("/vendor",vendorRoutes);
router.use("/product",productRoutes);

module.exports = router;