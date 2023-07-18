const express = require('express')
const {
    getMaterial,
} = require('../controllers/materialController')

const router = express.Router()

router.get('/', getMaterial);

module.exports = router