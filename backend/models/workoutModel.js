const mongoose = require('mongoose');
const Schema = mongoose.Schema
const jobSchema = new Schema({
    _id: Object, // Unique identifier for the document
    UniqId: String, // Unique ID associated with the job listing
    CrawlTimestamp: Date, // Timestamp of when the job listing was crawled
    JobTitle: String, // Title of the job opening
    JobSalary: String, // Salary range for the job
    JobExperienceRequired: String, // Experience required for the job
    KeySkills: String, // Key skills required for the job
    RoleCategory: String, // Category or domain of the role (e.g., Retail/Personal Banking)
    Location: String, // Location(s) where the job is available
    FunctionalArea: String, // Functional area of the job (e.g., Financial Services, Banking, Investments, Insurance)
    Industry: String, // Industry associated with the job (e.g., Insurance)
    Role: String // Role or position (e.g., Sales Officer)
}, { timestamps: true })

module.exports = mongoose.model('jobs', jobSchema)