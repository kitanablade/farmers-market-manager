const express = require('express');
const router = express.Router();
const productsRoutes = require("./productsRoutes");
const vendorsRoutes = require("./vendorsRoutes");
const eventsRoutes = require("./eventsRoutes");

router.use("/events",eventsRoutes);
router.use("/vendors",vendorsRoutes);
router.use("/products",productsRoutes);

module.exports = router;