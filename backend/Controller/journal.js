const JournalPage = require("../Models/journal");
const User = require("../Models/user");


exports.getUserJournals = async (req, res) => {
    const { userid } = req.params
    const journalPages = await JournalPage.find({ authorId: userid })
    res.status(200).json({
        journalPages

    })
};

exports.createJournal = async (req, res) => {
    const { userid } = req.params
    try {

        const user = await User.findById(userid)
        const journalPage = new JournalPage({
            ...req.body,
            authorId: userid
        })
        user.journal.push(journalPage)
        await journalPage.save()
        await user.save()
        res.status(201).send("Journal Created")
    }
    catch {
        res.status(500).send("Some Error Occured")
    }
}


exports.updateJournal = async (req, res) => {
    const { journalid } = req.params
    try {
        JournalPage.updateOne({ _id: journalid }, {
            ...req.body
        }).then(
            res.status(201).send("Updated")
        )
    }
    catch {
        res.status(500).send("Error")
    }
}

exports.getJournal = (req, res) => {
    const { journalid } = req.params
    JournalPage.findById(journalid, (err, journal) => {
        if (err) {
            console.log(err);
            res.send("error Occured")
        }
        else { res.send(journal) }
    })
}

exports.deleteJournal = async (req, res) => {
    const { journalid } = req.params
    const journal = await JournalPage.findById(journalid)
    const user = await User.findById(journal.authorId)
    if (user) {
        const newjournalaray = user.journal.filter(jid => jid != journalid)
        user.journal = newjournalaray
        await user.save()
        JournalPage.findByIdAndDelete(journalid).then(
            res.send("deleted")
        )

    }
}