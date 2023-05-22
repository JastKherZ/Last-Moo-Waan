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

  const sameuser = await prisma.user.findFirst({
    where : { username : qry.username }
  })
  // console.log(result);



  if (sameuser) {
    return res.status(400).send({ "error" : "Username already use"})
  }

  if (result.error) {
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

    // const accesToken  = jwt.sign(user, process.env.ACCESTOKEN_TOKEN_SECRET)

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});



const schema2 = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(6).max(16).required(),
  
});

//login
router.post('/login', async (req, res) => {
  const qry2 = req.body;

  const result = schema2.validate(qry2);

  if (result.error) {
    return res.status(400).send({ "error" :  result.error.details[0].message });
  }

  try {
    const user = await prisma.user.findUnique({ where: { username : qry2.username } });
    
    if (!user) {
      res.status(404).json({ error: 'User not found.' });
      return;
    }

    const passwordMatch = await bcrypt.compare(qry2.password, user.password);

    if (!passwordMatch) {
      res.status(401).json({ error: 'Invalid password.' });
      return;
    }

    res.json({ message: 'Login successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed.' });
  }
});


exports.router = router;