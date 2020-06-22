
const UserRepository = require('../dataaccess/user-callback.repository');

class UserCallbackService {

    constructor() {

    }

    createUser(data, callback) {
        UserRepository.create(data, (err, res) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(res, null);
        })
    }

    findUser(id, callback) {
        UserRepository.findById(id, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result);
        })
    }

    updateUser(data, id, callback) {
        let obj = { ...data, updated_on: new Date() };
        UserRepository.update(obj, id, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result);
        })
    }

    deleteUser(id, callback) {
        UserRepository.delete(id, (err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result);
        })
    }

    getUser(callback) {
        UserRepository.find((err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result);
        })
    }

}

module.exports = new UserCallbackService();