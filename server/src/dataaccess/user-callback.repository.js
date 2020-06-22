const dataAccess = require('../dataaccess/dataaccess');
const User = require('../dataaccess/schema/user-schema');
const mongoose = require('mongoose');

class UserCallbackRepository {

    create(data, callback) {
        const userModel = new User(data);
        userModel.save(function (err, result) {
            if (err) {
                callback(err, null);
            }
            callback(null, result);
        })
    }

    find(callback) {
        const db = dataAccess.getDBInstance();
        db.collection('users').find({}).toArray((err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result);
        })
    }

    findById(id, callback) {
        const db = dataAccess.getDBInstance();
        const query = { _id: mongoose.Types.ObjectId(id) };
        db.collection('users').find(query).toArray((err, result) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, result);
        })
    }

    update(obj, id, callback) {
        const db = dataAccess.getDBInstance();
        const query = { _id: mongoose.Types.ObjectId(id) };
        db.collection('users').update(query, { $set: obj }, { upsert: true, multi: false }).then((err, res) => {
            if (err) {
                callback(err, null);
                return;
            }
            callback(null, res);
        })

    }

    delete(id, calllback) {
        const db = dataAccess.getDBInstance();
        const query = { _id: mongoose.Types.ObjectId(id) };
        db.collection('users').deleteOne(query, (err, res) => {
            if (err) {
                calllback(err, null);
                return;
            }
            calllback(null, res);
        })

    }

}

module.exports = new UserCallbackRepository();