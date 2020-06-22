const dataAccess = require('../dataaccess/dataaccess');
const User = require('../dataaccess/schema/user-schema');
const mongoose = require('mongoose');

class UserRepository {

    constructor() { }

    create(data) {
        return new Promise((resolve, reject) => {
            const userModel = new User(data);
            userModel.save(function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
        })
    }

    find() {
        const db = dataAccess.getDBInstance();
        return new Promise((resolve, reject) => {
            db.collection('users').find({}).toArray((err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            })
        })
    }

    findById(email) {
        const db = dataAccess.getDBInstance();
        //const query = { _id: mongoose.Types.ObjectId(id) };
        const query = {email: email};
        return new Promise((resolve, reject) => {
            db.collection('users').find(query).toArray((err, result) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(result);
            })
        })
    }

    update(obj, id) {
        const db = dataAccess.getDBInstance();
        const query = { _id: mongoose.Types.ObjectId(id) };
        return new Promise((resolve, reject) => {
            db.collection('users').update(query, { $set: obj }, { upsert: true, multi: false }).then((err, res) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(res);
            })
        })
    }

    delete(id) {
        const db = dataAccess.getDBInstance();
        const query = { _id: mongoose.Types.ObjectId(id) };
        return new Promise((resolve, reject) => {
            db.collection('users').deleteOne(query, (err, res) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(res);
            })
        });
    }
}

module.exports = new UserRepository();