const { Router } = require('express');
const { getUserJournals, createJournal, updateJournal, getJournal, deleteJournal } = require('../Controller/journal');
const { isAuth } = require('../middleware/auth');

const journalRouter = Router()

journalRouter.get("/getall/:userid", getUserJournals)
journalRouter.get('/:journalid', getJournal)
journalRouter.post("/create/:userid", createJournal)
journalRouter.patch('/update/:journalid', updateJournal)
journalRouter.delete('/:journalid', deleteJournal)
module.exports = journalRouter;