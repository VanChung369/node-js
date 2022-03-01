const express = require("express");
const cors = require("cors");
const router = require("./routes/Auth");
const app = express();
const port = process.env.PORT;
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/',router);
app.listen(port, () => {
  console.log(`server listening on port ${port} ...`);
});
