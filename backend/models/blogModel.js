const mongoose = require('mongoose');
const Schema = mongoose.Schema

const blogSchema = new Schema({
    _id: String,
    img: String,
    title: String,
    author: String,
    content: String,
    link: String,
}, { timestamps: true })

module.exports = mongoose.model('blog', blogSchema)