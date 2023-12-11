const express = require('express')
const app = express()
require('./conn')
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }))





const User = require('./User')

app.post('/adduser', async (req, res) => {
    const data = User({
        name: req.body.name,
        email: req.body.email
    })

    const result = await data.save()
    if (result) {

        res.send({ msg: 'user added' })
    }

})

app.get('/getUSers', async (req, res) => {
    const Users = await User.find({})

    res.send({ users: Users })
})


app.post('/geteditUser', async (req, res) => {
    console.log(req.body)
    let user = await User.findById(req.body.id)

    res.send({ user })
})

app.post('/editthis', async (req, res) => {
    // console.log(req.body)
    let resp = await User.findByIdAndUpdate(req.body.id, { name: req.body.name })
    res.send({ msg: 'user updated' })

})

app.listen(8000, () => console.log('running on 8000'))