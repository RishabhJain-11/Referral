const { ObjectId } = require('mongodb')
const Job = require('../models/jobModel')
const mongoose = require('mongoose')

const getJobs = async (req, res) => {
    const jobs = await Job.find({}).sort({ createdAt: -1 })
    res.status(200).json(jobs)
}

module.exports = {
    getJobs,
}