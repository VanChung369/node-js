const express = require("express");
const cors = require("cors");
const connectDB = require('./db/connect');
const userrouter =require("./routes/userrouter");
require('dotenv').config();


const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
connectDB();
app.use("/api/user",userrouter);
app.listen(port, () =>
console.log(`Server is listening on port ${port}...`)
);
