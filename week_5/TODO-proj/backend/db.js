const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/todos")
const todoSchema = new mongoose.Schema({
    title : String ,
    description : String,
    completed : Boolean
});

const todos = mongoose.model("todoSchema",todoSchema);

module.exports = {
    todos : todos
}