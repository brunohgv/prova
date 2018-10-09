const express = require('express')
const router = express.Router()

const User = require('../models/user.js')

router.get('/', (req, res) => {
    User.get
    res.send('user working')
}, (err) => {
    console.log(err)
})

router.get('/all', (req, res) => {
    User.getAll((err, data) => {
        if(err){
            throw err
        }
        return res.json(data)
    })
}, (err) => {
    console.log(err)
})

router.post('/save', (req, res) => {
    var user = new User({username: 'bruno', password: 'senha'})
    User.create(user, (err, data) => {
        if (err) {
            throw err
        } else {
            return res.json(data)
        }
    })
})

module.exports = router