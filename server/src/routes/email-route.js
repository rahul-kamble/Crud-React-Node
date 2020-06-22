const express = require('express');
const router = express.Router();
const EmailController = require('../controller/email.controller');


router.put('/api/sent-email', EmailController.sendEmail);

module.exports = router;