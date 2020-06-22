const UserRepository = require('../dataaccess/user-repository');

class UserService {

    constructor() {

    }

    createUser(data) {
        return new Promise((resolve, reject) => {
            UserRepository.create(data).then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        })
    }

    findUser(id) {
        return new Promise((resolve, reject) => {
            UserRepository.findById(id).then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
        })
    }

    updateUser(data, id) {
        return new Promise((resolve, reject) => {
            let obj = { ...data, updated_on: new Date() };
            UserRepository.update(obj, id).then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
        })
    }

    deleteUser(id) {
        return new Promise((resolve, reject) => {
            UserRepository.delete(id).then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
        })
    }

    getUser() {
        return new Promise((resolve, reject) => {
            UserRepository.find().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
        })

    }

}

module.exports = new UserService();