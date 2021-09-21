const mongoose = require('mongoose')
const schema = mongoose.Schema


const journalPageSchema = new schema({
    title: {type: String, default:"Untitiled"},
    data: {type:String, default:""}
}
)

const JournalPage= mongoose.model("JournalPage",journalPageSchema)

module.exports = JournalPage;
