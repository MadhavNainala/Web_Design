const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const bcrypt = require("bcrypt")
const saltRounds = 10
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/full-mern-stack')

app.post('/api/register' , async (req, res) => {
    console.log(req.body)
    try{

        const user = await User.create({

            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password , saltRounds)
        })

        res.json({status: 'ok'})

    }
    
    catch(err) {

        res.json({status: 'error' , error: 'Data Already Exists'})

    }
    
})



app.post('/api/login' , async (req, res) => {
    
    

        const user = await User.findOne({ 

            
            email: req.body.email,
            password: req.body.password
        })

    

    if (user) {

        return res.json({status: 'ok' , user : true})
    }

    
    else {

        return res.json({status: 'error' , user : false})


    }
    
    
})


app.listen(1337, () => {
    console.log('server started on 1337')
})