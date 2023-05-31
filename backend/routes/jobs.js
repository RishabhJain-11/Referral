const express = require('express')
const {
    getJobs,
    getJob
} = require('../controllers/jobController')

const router = express.Router()

// GET all workouts
router.get('/', getJobs)

// GET a single workout
router.get('/:id', getJob)

module.exports = router