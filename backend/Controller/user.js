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
            await user.save()
            res.status(201).json({ message: "User was created", user });
        }
        else {
            res.json({ message: "User Already Exists" })
        }
    }
    catch (error) {
        console.log(error);
    }
}


exports.login = (req, res) => {
    res.status(200).json({
        user: req.user,
        userID: req.session.passport.user
    })
}

exports.getUser = async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id);
    if (!user) {
        res.send(user)
    }
    else {
        res.send("user doesn't exist")
    }
}