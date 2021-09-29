const { genPassword } = require("../Lib/authuUtils")
const User = require("../Models/user")




exports.register = async (req, res, next) => {
    const { email, password } = req.body
    const hash = await genPassword(password)
    try {

        const isUser = await User.findOne({ email: email })

        if (!isUser) {
            const user = new User({
                ...req.body,
                password: hash
            })
            user.save().then((user) => {
                res.status(201).json({ message: "User was created", user });
            })
        }
        res.json({ message: "User Already Exists" })
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