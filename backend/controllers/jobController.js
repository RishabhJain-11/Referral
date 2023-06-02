const { ObjectId } = require('mongodb')
const Job = require('../models/jobModel')
const mongoose = require('mongoose')

// get all jobs
const getJobs = async (req, res) => {
    const jobs = await Job.find({}).sort({ createdAt: -1 })
    res.status(200).json(jobs)
}


// get a single job
const getJob = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such job' })
    }

    const job = await Job.findById(id)

    if (!job) {
        return res.status(404).json({ error: 'No such job' })
    }

    res.status(200).json(job)
}

module.exports = {
    getJobs,
    getJob,
}