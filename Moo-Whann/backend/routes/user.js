const express = require('express');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();


router = express.Router();

const schema1 = Joi.object({
    fname: Joi.string().required(),
    lname: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().min(6).max(16).required(),
    repassword: Joi.ref('password')
  });


router.get('/', async (req, res) => {

    const result = await prisma.user.findMany()
    res.json(result)
})







//register
router.post('/register', async (req, res) => {
  const qry = req.body;
  
  // Validate input using Joi
  

  const result = schema1.validate(qry);


  // console.log(result);



  if (result.error) {
    // if (result.error.details[0].path[0] == 'fname'){
    //   return res.status(400).send({ "error " : result.error.details[0].message})  
    // }
    // if (result.error.details[0].path[0] == 'lname'){
    //   return res.status(400).send({ "error " : result.error.details[0].message})  
    // }
    // if (result.error.details[0].path[0] == 'username'){
    //   return res.status(400).send({ "error " : result.error.details[0].message})  
    // }
    // if (result.error.details[0].path[0] == 'password'){
    //   return res.status(400).send({ "error " : result.error.details[0].message})  
    // }
    // if (result.error.details[0].path[0] == 'repassword'){
    //   return res.status(400).send({ "error " : result.error.details[0].message})  
    // }
    return res.status(400).send({ "error" :  result.error.details[0].message });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(qry.password, 10);

    // Save the user to the database
    const user = await prisma.user.create({
      data: {
        
        fname : qry.fname,
        lname : qry.lname,
        username : qry.username,
        password: hashedPassword,
        
      }
    });

    res.json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});


exports.router = router;