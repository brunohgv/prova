const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('posts working')
}, (err) => {
    console.log(err)
})

module.exports = router