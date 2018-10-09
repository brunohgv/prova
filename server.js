const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true})

const PORT = process.env.PORT || 4000

const usersApi = require('./routes/users.js')
const postsApi = require('./routes/posts.js')

app.use(bodyParser.json())
app.use('/users', usersApi)
app.use('/posts', postsApi)

app.listen(PORT, () => {
    console.log('listen on port: ' + PORT)
})