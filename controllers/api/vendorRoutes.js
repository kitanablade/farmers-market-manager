const express = require('express');
const router = express.Router();
const {Vendor} = require('../../models');

router.get("/", (req, res) => {
    Vendor.findAll ({
        include: [Products]
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({message: "Error!", err})
    })

})

router.post("/", (req, res) => {
    if (!req.session.user){
        return res.status(403).json({message: "Please log-in, first!"})
    }
        Vendor.create({
            UserId: req.sesssion.user.id,
            Content: req.body.content,

        }).then (data => {
            res.json(data)
        }) .catch (err => {
            res.status(500).json({message: "Please log-in, first!"})
        })
});

router.delete('/:id', async (req, res) => {
    Vendor.destroy ({
        UserId: req.session.user,
        content: req.body.content,
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
});