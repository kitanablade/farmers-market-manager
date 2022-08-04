const express = require('express');
const router = express.Router();
const {Vendors, Customers} = require('../../models');

router.get("/", (req, res) => {
    Vendors.findAll ({
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
        Vendors.create({
            UserId: req.sesssion.user.id,
            Content: req.body.content,

        }).then (data => {
            res.json(data)
        }) .catch (err => {
            res.status(500).json({message: "Please log-in, first!"})
        })
});

router.delete('/:id', async (req, res) => {
    Vendors.destroy ({
        UserId: req.session.user,
        content: req.body.content,
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"ERROR",err})
    })
});