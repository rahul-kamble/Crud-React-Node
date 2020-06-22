const userService = require('../services/user-service');

class UserController {

    static getUser(req, res) {
        userService.getUser().then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(500).send(err);
        })
    }

    static findUser(req, res) {
        const id = req.params.id;
        userService.findUser(id).then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(500).send(err);
        })
    }

    static createUser(req, res) {
        userService.createUser(req.body).then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(500).send(err);
        })
    }

    static updateUser(req, res) {
        const id = req.params.id;
        userService.updateUser(req.body, id).then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(500).send(err);
        })
    }

    static deleteUser(req, res) {
        const id = req.params.id;
        userService.deleteUser(id).then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(500).send(err);
        })
    }

}

module.exports = UserController;