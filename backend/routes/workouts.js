const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Get all workouts' })
})

router.get('/:id', (req, res) => {
    res.json({ message: 'Get single workout' })
})

router.post('/', )

module.exports = router