const { ObjectId } = require('mongodb')
const Material = require('../models/materialModel')
const mongoose = require('mongoose')

const getMaterial = async (req, res) => {
    const mat = await Material.find({}).sort({ createdAt: -1 })
    res.status(200).json(mat)
}

module.exports = {
    getMaterial,
}