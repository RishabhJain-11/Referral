const mongoose = require('mongoose');
const Schema = mongoose.Schema
const jobSchema = new Schema({
    _id: String,
    compName: String,
    empCount: String,
    jobTitle: String,
    jobSalary: String,
    exp: String,
    Location: String,
    Industry: String,
    Role: String,
    Link: String,
    Type: String,
}, { timestamps: true })

module.exports = mongoose.model('jobs', jobSchema)