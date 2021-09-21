const { genPassword } = require("../lib/passwordUtils")
const User = require("../models/user")



exports.register = async (req, res, next) => {
    const { email, password } = req.body
    const hash = await genPassword(password)
    try {

        const isUser = await User.findOne({ email: email })

        if (isUser) res.json({ message: "User Already Exists" })


        const user = new User({
            ...req.body,
            password: hash
        })
        user.save().then((user) => {
            res.status(201).json({ message: "User was created", user });
        })
    }
    catch (error) {
        res.status(400).json({
            message: "Invalid data",
            error
        })
    }
}


exports.login = (req, res) => {
    res.status(200).json({
        user: req.user,
        userID: req.session.passport.user
    })
}