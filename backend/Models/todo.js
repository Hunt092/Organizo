const mongoose = require('mongoose')
const schema = mongoose.Schema


const todoSchema = new schema({
    status: { type: Boolean, default: false },
    data: { type: String, default: "" },
    Priority: { type: String, default: "low", enum: ["low", "medium", "high"] },
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    date: { type: Date, default: Date() },
    tobeDone: { type: Date, default: Date() }


}
)

const todo = mongoose.model("todo", todoSchema)

module.exports = todo;
