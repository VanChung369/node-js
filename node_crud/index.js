const express = require("express");
const morgan = require("morgan");
const userroutes = require("./routes/user");
const bodyparser = require("body-parser");
const connectDB = require('./db/connect');
const path = require('path');
const app = express();
require("dotenv").config({path:".env"});

// cau hinh khi dung voi json
// app.use(express.json());
app.use(bodyparser.urlencoded({ extended : true}))
//router
app.use("/user", userroutes);

// hien thi trang thai request
app.use(morgan("tiny"));
// set view 
app.set('view engine','ejs');
// app.use('views',express.static(path.resolve(__dirname,"views/ejs")));
//load asset
//assets/css/style.css
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));
// thiet lap cong lang nghe
const port = process.env.PORT || 5000;
// connect db
connectDB();
// router
app.use('/',userroutes);
//server 
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
