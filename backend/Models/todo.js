const mongoose = require('mongoose')
const schema = mongoose.Schema


const todoSchema = new schema({
    status: { type: String, default: "Undone" },
    data: { type: String, default: "" },
    Priority: { type: String, default: "low" }
}
)

const todo = mongoose.model("todo", todoSchema)

module.exports = todo;
