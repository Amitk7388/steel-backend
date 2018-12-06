const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post specification
const C2 = require('../../../models/C2');

router.post('/c2', (req, res)=>{
    const Postc2 = new C2({
        faceplateprice: req.body.faceplateprice,
        shellsprice: req.body.shellsprice,
        artworkprice: req.body.artworkprice,
        modeltype: {
            c2:req.body.c2,
            c4:req.body.c4,
            c9:req.body.c9,
        }        
    });
    Postc2.save().then(postcs => res.json(postcs));
    
})

module.exports = router;