//hard assignment to calculate simple interest:: (P*T*R)/100;
const express = require('express');
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


app.get("/sum",(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const sum = parseInt(a)+parseInt(b);
    res.send(sum);
})

app.get("/SI",(req,res)=>{
    const p = parseInt(req.query.p);
    const t = parseInt(req.query.t);
    const r = parseInt(req.query.r);
    const interest = (p*t*r)/100;
    res.json({amount:p+interest,interest:interest})
})



app.listen(5000,()=>{
    console.log("Listening on port 5000");
})