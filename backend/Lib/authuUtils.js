const bcrypt = require("bcrypt");
const SALTROUNDS = 10

exports.genPassword = async (passwordString) => {
    const hash = await bcrypt.hash(passwordString, SALTROUNDS)
    return hash
}

exports.validatePassword = async (passwordString, hash) => {
    const result = await bcrypt.compare(passwordString, hash)
    return result
}