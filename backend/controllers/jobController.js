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
    const { id } = req.params;
    const objID = new mongoose.Types.ObjectId();
    const objectIdString = objID.toString();

    if (!mongoose.Types.ObjectId.isValid(objectIdString)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    const job = await Job.findById(objectIdString);

    if (!job) {
        return res.status(404).json({ error: 'No such workout' })
    }

    res.status(200).send(job)

}

module.exports = {
    getJobs,
    getJob,
}