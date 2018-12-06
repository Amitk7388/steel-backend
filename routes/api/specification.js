const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post specification
const PostSpecification = require('../../models/Specification');


router.post('/specifications', (req, res) => {
    // const { errors, isValid } = validateBlogPostInput(req.body);
 
    //  // check Validation
    //  if (!isValid) {
    //    // If any errors occer, send 400 with errors object
    //    return res.status(400).json(errors);
    //  }     
 
     const blogPosts = new PostSpecification({
          leftfaceplate: req.body.leftfaceplate,
          rightfaceplate: req.body.rightfaceplate,
          leftshell: req.body.leftshell,
          rightshell: req.body.rightshell
     });
     blogPosts.save().then(blogpost => res.json(blogpost));
 })

 module.exports = router;