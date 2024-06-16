//creating a http server
// run npm init -y
// npm install express
// and then the following code

// const express = require("express")

// const parser = require("body-parser")


// const app = express()
// const port = 3000
// app.use(parser.json())
// app.post('/route_handler',(req, res)=>{
//     console.log(req.body)
//     res.json({
//         name:"aaditya",
//         age: 21
//     })
// })
// app.listen(port)


// const express = require('express')
// const app = express()

// function calc_sum(n){
//     let sum =0
//     for (let i=0; i<= n;i++){
//         sum+= i;
//     }

//     return sum;
// }

// app.get("/calculate",(req,res)=>{
//     let n = req.query.n;

//     res.json(calc_sum(n));
// })

// app.listen(3005)
// console.log("app listening on port: 3005")

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}]

const express = require("express")
const app= express()
app.get("/",(req, res)=>{
    num_kidneys = users[0].kidneys;
    no_kid = num_kidneys.length
    healthy_num = 0

    num_kidneys.forEach(element => {
        if (element.healthy){
            healthy_num +=1;
        }
    });

    unhealthy_num = no_kid - healthy_num;

    res.json({
        no_kid,
        healthy_num,
        unhealthy_num
    })

})

app.use(express.json())   //make sure syntax is exact


app.post("/", function(req,res){
    const isHealthy = req.body.healthy;

    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.send("done")
})

app.put("/",(req,res)=>{

    users[0].kidneys.forEach(element => {
        element.healthy = false
    });

    res.send("UPDATED")

})

app.delete("/", (req, res) => {
    let newKid = []
    users[0].kidneys.forEach(element => {
        if (element.healthy){
            newKid.push({
                healthy: true
            })
        }

    });

    users[0].kidneys = newKid;


    res.send("deleted unhealthy kidneys")

})
app.listen(3000)