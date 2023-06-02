const mongoose = require('mongoose');
const Schema = mongoose.Schema
const jobSchema = new Schema({
    _id: String, // Unique identifier for the document
    jobTitle: String, // Title of the job opening
    jobSalary: String, // Salary range for the job
    exp: String, // Experience required for the job
    Location: String, // Location(s) where the job is available
    Industry: String, // Industry associated with the job (e.g., Insurance)
    Role: String // Role or position (e.g., Sales Officer)
}, { timestamps: true })

module.exports = mongoose.model('jobs', jobSchema)