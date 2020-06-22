const EmailService = require('./../services/email-service');

class EmailController {

    static sendEmail(req, res) {
        EmailService.sendEmail().then(result => {
         res.status(200).send('email sent');
        }).catch(err => {
            console.log('err', err);
         res.status(500).send('failed to send email');
        })
    }

}

module.exports = EmailController;