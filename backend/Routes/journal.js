const { Router } = require('express');
const { getUserJournals, createJournal, updateJournal, getJournal, deleteJournal } = require('../Controller/journal');
const { isAuth } = require('../middleware/auth');

const journalRouter = Router()

journalRouter.get("/:userid/getall", getUserJournals)
journalRouter.get('/:journalid', getJournal)
journalRouter.post("/:userid/create", createJournal)
journalRouter.patch('/:journalid/update', updateJournal)
journalRouter.delete('/:journalid', deleteJournal)
module.exports = journalRouter;