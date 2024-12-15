const express = require('express');
const cors = require('cors');
const app = express()
const {createTodoV, updateTodoV} = require('./types');
const { todos } = require('./db');

app.use(express.json());
app.use(cors())


app.post("/todos",async(req, res)=>{
    const payload = req.body;
    const parsed_payload = createTodoV.safeParse(payload);
    if (!parsed_payload.success){
        res.status(411).json({
            msg : "Wrong inputs"
        });
        return;
    }
    //put  it in mongodb
    await todos.create({
        title : payload.title,
        description : payload.description,
        completed : false
    });

    res.json({msg : "Todo created"});

});

app.get("/todos",async (req,res)=>{
    const listOfTodos = await todos.find({});
    res.json(listOfTodos);
});

app.put("/complete-todos",async(req,res)=>{
    const payload = req.body;
    const parsed_payload = updateTodoV.safeParse(payload);
    if(!parsed_payload.success){
        res.status(411).json({
            msg: "Inputs are wrong"
        })
    }
    await todos.updateOne({
        // conditions as this
        _id  : req.body.id
    },{
        completed : true
    });
    res.status(200).json({
        msg : "todos updated"
    });
});

app.listen(3000);