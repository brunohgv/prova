const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = require('./post')

var userSchema = new Schema({
    username: String,
    password: String
})

const User = module.exports = mongoose.model('User', userSchema)

module.exports.create = function (user, callback) {
    return User.create(user, callback)
}

module.exports.getAll = function (callback) {
    return User.find({}, callback)
}