const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors())

const chafData = require("./data.json")

app.get('/', (req, res)=>{
    res.json({ message: "hello server running"})
})

app.get('/chefAllData', (req, res)=>{
    res.send(chafData)
})
app.get('/chefAllData/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    console.log(id);
    const selectedChefData = chafData.find(n => parseInt(n.id) === id)
    console.log(selectedChefData);
    res.send(selectedChefData);
})

app.listen(7000, ()=>{
    console.log("server is running");
})