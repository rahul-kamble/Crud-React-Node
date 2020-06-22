const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller');
//const UserController = require('../controller/user-callback.controller');

router.get('/api/user', UserController.getUser);

router.get('/api/user/:id', UserController.findUser);

router.put('/api/user/:id', UserController.updateUser);

router.post('/api/user', UserController.createUser);

router.delete('/api/user/:id', UserController.deleteUser);

module.exports = router;
