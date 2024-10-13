const express = require('express');
const User = require('../models/user');
const user = require('../models/user');
const router = express.Router();


//Create user
router.post("/users", (req,res)=>{
    const user = User(req.body);

    user.save()
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.json({message: err});
    });
} )

//Get all users
router.get("/users", (req,res)=>{

    User.find()
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.json({message: err});
    });
})

//Get a user by id

router.get('/users/:id', (req,res)=>{
    const id = req.params.id;
    User.findById(id)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.json({message: err});
    });
})

//Update a user

router.put('/users/:id', (req,res)=>{
    const id = req.params.id;
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;


    User.updateOne({_id: id}, {name: name, age: age, email: email})
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.json({message: err});
    });
})

//Delete a user
router.delete('/users/:id', (req,res)=>{
    const id = req.params.id;
    const user = req.body;

    User.deleteOne({_id: id})
    .then((data)=>{
        res.send('User deleted');
        res.sendDate(data);
        res.json(data);
    })
    .catch((err)=>{
        res.json({message: err});
    });

})




router.p

// EXPORTA EL ROUTER PARA PODER USARLO EN OTRO ARCHIVO
module.exports = router;