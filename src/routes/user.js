const express = require('express');
const User = require('../models/user');
const router = express.Router();


//Create user
router.post("/users", (req,res)=>{
    res.send('Create User');
} )


module.exports = router;