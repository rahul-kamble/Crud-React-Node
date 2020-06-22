const UserRepository = require('../../dataaccess/user-repository');

class PugService {

    userDetailsPugJade(req, res) {
        return new Promise((resolve, reject) => {
            UserRepository.find().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
        })
    }

}

module.exports = new PugService();