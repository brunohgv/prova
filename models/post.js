const mongoose = require('mongoose')
const Schema = mongoose.Schema

var postSchema = new Schema({
    content: String,
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
