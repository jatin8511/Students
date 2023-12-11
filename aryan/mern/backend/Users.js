const mongoose = require('mongoose')


const userschema = mongoose.Schema({
    name: String,
    email: String
})

const User = mongoose.model('users', userschema)


module.exports = User