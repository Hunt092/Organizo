const mongoose = require('mongoose')
const schema = mongoose.Schema


const todoSchema = new schema({
    status: { type: String, default: "Undone" },
    data: { type: String, default: "" },
    Priority: { type: String, default: "low", enum: ["low", "medium", "high"] },
    authorID: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    date: { type: Date, default: Date() }
}
)

const todo = mongoose.model("todo", todoSchema)

module.exports = todo;
