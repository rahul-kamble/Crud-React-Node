const express = require('express');
const router = express.Router();
const EventController = require('./../controller/event.controller');

router.get('/api/event/:id', EventController.createEvent);

module.exports = router;