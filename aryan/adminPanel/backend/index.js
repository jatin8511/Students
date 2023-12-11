const express = require('express')
const app = express()
const User = require('./models/user')
let Order = require('./models/orders')
const Product = require('./models/product')
const cors = require('cors')
require('./conn')
// config
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/register', async (req, res) => {

    let data = User({
        name: req.body.name,
        email: req.body.email,
        pass: req.body.pass
    })

    let result = await data.save()

    if (result) {

        res.send({ msg: 'registered' })
    } else {
        res.send({ msg: 'user register failed' })

    }
})


app.post('/adminLogin', async (req, res) => {
    let admin = await User.findOne({ email: req.body.email })

    if (admin && admin.pass == req.body.pass && admin.isAdmin) {
        res.send({ msg: 'login successfully!', success: true, user: admin })
    } else {
        res.send({ msg: 'your are not a Admin!', success: false })
    }

    console.log(req.body)
})


app.post('/addproduct', async (req, res) => {
    console.log(req.body)
    const data = Product({
        title: req.body.title,
        img: req.body.img,
        img2: req.body.img2,
        img3: req.body.img3,
        discount: req.body.discount,
        price: req.body.price,
    })

    let result = await data.save()


    console.log(result)
})


app.get('/products', async (req, res) => {
    let products = await Product.find({})
    // console.log(products)

    res.send(products)
}
)

app.delete('/deletproduct/:id', async (req, res) => {

    let result = await Product.findByIdAndDelete(req.params.id)
    // console.log(result)
    if (result) {
        res.send({ msg: 'deleted!' })
    } else {
        res.send({ msg: 'problems in backend' })
    }
})



app.put('/update/:id', async (req, res) => {
    console.log(req.params.id)
    console.log(req.body)


    let result = await Product.findByIdAndUpdate(req.params.id, { title: req.body.title, price: req.body.price })

    if (result) {
        res.send({ msg: 'updated!' })
    } else {
        res.send({ msg: 'problems in backend' })
    }
})

app.post('/order', async (req, res) => {
    console.log(req.body)
    let data = Order({
        id: req.body.id
    })

    let result = await data.save()

    if (result) {
        res.send({ msg: 'order placed successfully' })
    } else {
        res.send({ msg: 'order failed!' })
    }
})

app.get('/getallorders', async (req, res) => {
    let orders = await Order.find({})
    res.send(orders)
})
app.listen(8080, () => console.log('running on 8080'))