const express = require('express')

let app = express()
let cors = require('cors')
app.use(cors())

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    let users = [
        { name: 'jatin' }, { name: 'ayushi' },
    ]
    res.send(users)
})
app.get('/about', (req, res) => {
    let users = [
        { name: 'jatin' }, { name: 'ayushi' },
    ]
    res.render('magan')
})







app.listen(8080, () => console.log('server is running on 8080'))




