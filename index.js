const express = require("express")
const app = express()



require("dotenv").config()

app.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname, "static/index.html"))
})

app.get("*", (req, res)=>{
  res.redirect("/")
})

app.listen(process.env.PORT || 3000)