const express = require("express")
const zod = require("zod")

// const check_kidneys = zod.array(zod.number());
const schema = zod.object({
    email:zod.string,
    password:zod.string().email(),
    country:zod.literal("IN").or(zod.literal("US"))
})

app = express()

app.use(express.json())

app.post("/health-checkup",(req,res)=>{
    const kidneys = req.body.kidneys;
    let response = check_kidneys.safeParse(kidneys);
    res.send(response)
})

// //to prevent users seeing errors, GLOBAL CATCHES
// app.use((err,req,res,next)=>{
//     if (err){
//         res.json({"Mesg":err})
//     }else{ 
//         next();
//     }
// })

app.listen(3000)