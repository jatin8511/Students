const express = require('express')
const User = require('./Users')
require('./conn')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1>hello world </h1>')
})


app.post('/register', async (req, res) => {
    let data = User({
        name: req.body.name,
        email: req.body.email
    })

    const result = await data.save()
})

app.get('/getusers', async (req, res) => {
    let users = await User.find({})

    console.log(users)

    res.send(users)
})

app.listen(8080, () => console.log('app is listening on 8080'))