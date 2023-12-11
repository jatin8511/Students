const mongoose = require('mongoose')


const USedrSchema = mongoose.Schema({
    name: String,
    email: String
})

const User = mongoose.model('users', USedrSchema)
module.exports = User