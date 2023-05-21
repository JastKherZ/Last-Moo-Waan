const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const express = require("express")

router = express.Router();

router.get("/", async (req, res) => {

    const result = await prisma.item.findMany()
    res.json(result)

})







exports.router = router;