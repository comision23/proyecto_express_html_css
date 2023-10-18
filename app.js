const express = require('express')
const app = express()
const path = require('path')

const port = 3000


app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
})

app.get("/aux", (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index1.html"))
})


app.use(express.static('public'))

app.listen(port, console.log(`Server running in http://localhost:${port}`))