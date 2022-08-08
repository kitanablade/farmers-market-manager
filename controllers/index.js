const express = require('express');
const router = express.Router();
const apiRoutes = require("./api");
const frontend = require('./frontend')

router.use("/api",apiRoutes)
router.use(frontend)

module.exports = router;