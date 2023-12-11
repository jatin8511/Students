const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    id: String,
    name: {
        type: String,
        default: 'aryan'
    },
    address: {
        type: String,
        default: 'aditya arcade 3rd floor 304 '
    }
})

const Order = mongoose.model('orders', UserSchema)

module.exports = Order