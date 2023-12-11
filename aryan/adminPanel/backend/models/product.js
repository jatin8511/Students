const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    title: String,
    img: String,
    img2: String,
    img3: String,
    discount: Number,
    price: Number,
    qty: {
        type: Number,
        default: 1
    }
})

const Product = mongoose.model('products', UserSchema)

module.exports = Product