const { ObjectId } = require('mongodb')
const Blogs = require('../models/blogModel')
const mongoose = require('mongoose')

const getBlog = async (req, res) => {
    const blog = await Blogs.find({}).sort({ createdAt: -1 })
    res.status(200).json(blog)
}

module.exports = {
    getBlog,
}