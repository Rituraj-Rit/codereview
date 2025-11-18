const express = require('express');
const router = express.Router();
const aiResponse = require('../controller/ai.controller')

router.post('/get-response',aiResponse)

module.exports = router;