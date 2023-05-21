const express = require("express")
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());  

// const userRouter = require('./routes/user')
const itemRouter = require('./routes/item')
// const paymentRouter = require('./routes/payment')

// app.use(userRouter.router)
app.use("/api/items", itemRouter.router)
// app.use(paymentRouter.router)

app.listen(port, () => console.log(`Server started on port ${port}`));