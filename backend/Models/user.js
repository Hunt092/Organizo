const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    email: { type: String, required: true, unique: true },
    password: {type:String, required:true},
    firstName: {type: String},
    lastName: {type: String},
    journal: [{
        type: mongoose.Types.ObjectId
    }]
})