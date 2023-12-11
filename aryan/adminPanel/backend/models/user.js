const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    pass: String,
    isAdmin: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('users', UserSchema)

module.exports = User