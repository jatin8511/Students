const express = require('express')

const app = express()

const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
require('./conn')
const User = require('./UserModel')
app.get('/', (req, res) => {
    res.send('hello hritu')
})
app.get('/about', (req, res) => {
    res.send('hello about')
})


app.post('/register', async (req, res) => {
    const data = User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        pass: req.body.pass
    })

    let result = await data.save()


    if (result) {
        res.send({ success: true, msg: 'user registered successfully!', user: result })
    }

})

app.get('/getallusers', async (req, res) => {
    let users = await User.find({})
    res.send(users)
    console.log(users)
})

app.post('/login', async (req, res) => {
    let user = await User.findOne({ email: req.body.email })

    if (user && user.pass == req.body.pass) {
        res.send({ msg: 'Login Successfully', success: true })
    } else {
        res.send({ msg: 'user Not found!', success: false })
    }
    console.log(req.body)
})

app.post('/getuser/:id', async (req, res) => {
    let user = await User.findById(req.params.id)
    console.log(user)
    res.send({ success: true, user })
})

app.delete('/deleteuser/:id', async (req, res) => {
    let resp = await User.findByIdAndDelete(req.params.id)
    res.send({ msg: 'user Deleted successfuly' })
})

app.put('/edituser', async (req, res) => {
    console.log(req.body)
    let resp = await User.findByIdAndUpdate(req.body.id, { name: req.body.name, age: req.body.age })
    console.log(resp)
})
app.listen(8000, () => console.log('your app is running on port 8000 '))