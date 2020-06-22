const PugJadeService = require('../service/pug-jade.service');

class PugController {

    static userDetailsPug(req, res) {
        PugJadeService.userDetailsPugJade().then(result => {
            res.render("homepage", {
                users: result
            });
        }).catch(err => {
            console.log(err);
         res.status(500).send(err);
        })
    }

    static userDetailsJade(req, res) {
        PugJadeService.userDetailsPugJade().then(result => {
            res.render("homepage", {
                users: result
            });
        }).catch(err => {
         res.status(500).send(err);
        })
    }

}

module.exports =  PugController;