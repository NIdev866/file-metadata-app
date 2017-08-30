const express = require("express")
const path = require("path")
const bodyParser = require('body-parser')
const multer = require("multer")
const app = express()
app.use(bodyParser.json());
require("dotenv").config()

app.post('/', multer({ dest: './uploads/'}).single('upload'), function(req,res){
  res.json({
    fileSize: req.file.size + " bytes"
  })
});

app.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname, "static/index.html"))
})

app.get("*", (req, res)=>{
  res.redirect("/")
})

app.listen(process.env.PORT || 3000)