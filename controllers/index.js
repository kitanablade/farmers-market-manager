const express = require('express');
const router = express.Router();
const apiRoutes = require("./api");

//renders homepage
router.get('/',(req,res)=>{
    res.render("home")
})

//renders vendor page
// router.get('/vendor', (req, res)=>{
//     res.render("vendor")
// })



router.use("/api",apiRoutes)

module.exports = router;