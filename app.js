const express = require("express");
const mongoose = require("mongoose");
const Allrouter = require("./src/routes/index");
const cors =  require("cors");
const dotEnv =  require("dotenv");
dotEnv.config({path:'./src/config/.env'})
const messageLogger = require("./src/config/logger");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect(process.env.MONGODB_URL, {  useNewUrlParser: true, useUnifiedTopology: true }).then(
    (res)=>{
        messageLogger.info("Successfully connected to db")
    },
    (err) => {
      console.log(err);
    }
)
app.use(cors());
app.options("*", cors());
app.use("/api", Allrouter)
app.use((err, req, res, next)=>{
    res.status(err.status || 500);
    res.send({
        status_code:500,
        message:err.message,
        data:"",
    })
})
app.listen(PORT, ()=>{
    console.log("Server listening on port ")
})