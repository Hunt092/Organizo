const { Router } = require('express');
const passport = require('passport');
const { register, login } = require('../Controller/user');
const userRouter = Router()



userRouter.get('/', (req, res) => {
    res.send("user Route")
})
userRouter.post('/signup', register)
userRouter.post('/login', passport.authenticate('local'), login)

module.exports = userRouter;
