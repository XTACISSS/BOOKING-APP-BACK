const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user');

const app = express();
const port = process.env.PORT || 9000;


//Middleware es una funcion que se ejecuta antes de que se ejecute el controlador
app.use('/api', userRoutes);


//Routes
app.get('/', (req,res)=>{
    res.send('Hello World');
});

mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log('Connected to MongoDB');
    })
    .catch((err)=>{
        console.log('Error connecting to MongoDB', err);
    });

app.listen(port , ()=> console.log('Server is running on port ', port));