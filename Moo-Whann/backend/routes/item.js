const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const Joi = require('joi');

const express = require("express")

router = express.Router();



router.get("/", async (req, res) => {

    const result = await prisma.item.findMany()
    res.json(result)

})





// item detail page
router.get("/itemdetails/:id", async (req, res) => {
    const id = req.params.id

    try {
      const products = await prisma.item.findUnique({
        where: {item_id : id}
      });
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }

})



const schema1 = Joi.object({
    price : Joi.number().positive().min(0).required(),
    amount : Joi.number().min(0).required()
  });

// edit item
router.put("/admin/edititem/:id", async (req, res) => {
    const id = req.params.id
    const qry = req.body

    const result = schema1.validate(qry)

    if (result.error) {
        return res.status(400).json({ "error": result.error.details[0].message });
    }


    try {
        const product = await prisma.item.update({
          where: { item_id: id },
          data: { price : qry.price, amount : qry.amount }
        });
        res.json({ message: 'Product updated successfully', product });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
   
})





exports.router = router;