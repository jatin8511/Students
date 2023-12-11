const mongoose = require('mongoose')


let UserShema = mongoose.Schema({
    name: String,
    email: String,
    pass: String
})



let User = mongoose.model('users', UserShema)


module.exports = User