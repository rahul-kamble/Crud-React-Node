const userService = require('../services/user-callback.service');

class UserCallbackController {

    constructor() {}

    static getUser(req, res) {
       return userService.getUser((err, result) => {
            if(err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).send(result);
        })
    }

    static findUser(req, res) {
        const id = req.params.id;
        userService.findUser(id, (err, result) => {
            if(err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).send(result);
        })
    }

    static createUser(req, res) {
        userService.createUser(req.body, (err, result) => {
            if(err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).send(result);
        })
    }

    static updateUser(req, res) {
        const id = req.params.id;
        userService.updateUser(req.body, id, (err, result) => {
            if(err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).send(result);
        })
    }

    static deleteUser(req, res) {
        const id = req.params.id;
        userService.deleteUser(id, (err, result) => {
            if(err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).send(result);
        })
    }
}

module.exports = UserCallbackController;