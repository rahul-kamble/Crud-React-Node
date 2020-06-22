const express = require('express');
const route = express.Router();
const PugController = require('../controller/pug-jade.controller');


route.get('/api/pug/user-demo', PugController.userDetailsPug);

route.get('/api/jade/user-demo', PugController.userDetailsJade);

module.exports = route;