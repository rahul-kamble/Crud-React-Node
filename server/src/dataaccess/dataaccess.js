//Import the mongoose module
var mongoose = require('mongoose');

class MongoService {

    constructor() {
        this.db = null;
    }

   static connect() {
        return new Promise((resolve, reject) => {
            //Set up default mongoose connection
            const mongoDB = 'mongodb://127.0.0.1/user';
            mongoose.connect(mongoDB, { useNewUrlParser: true }, (err, connection) => {
                if (err) {
                    reject(err);
                    return;
                }

                try {
                    this.db = connection.db;
                    resolve();
                } catch (err) {

                }
            });
        })
    }

    static getDBInstance() {
        return this.db;
    }

}

module.exports = MongoService;