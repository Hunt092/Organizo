const { Router } = require('express');

const journalRouter = Router()

journalRouter.get("/:userid", getUserJournals)



module.exports = journalRouter;