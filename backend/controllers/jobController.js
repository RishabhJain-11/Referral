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
    theid = ObjectId.toString(req.params.id);
    Job.find(({ id: theid }))
        .then((id) => {
            res.json(id);
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = {
    getJobs,
    getJob,
}