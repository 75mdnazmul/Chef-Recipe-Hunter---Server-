const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.json({ message: "hello server running"})
})

app.get('/alldata', (req, res)=>{
    console.log('hello ');
})

app.listen(7000, ()=>{
    console.log("server is running");
})