const fs = require('fs');
const path = require('path');
const events = require('events');
const eventEmitter = new events.EventEmitter();
const EmailService = require('./../services/email-service');
const UserService = require('./../services/user-service');

class EventService {

    createEvent(id) {
        return new Promise((resolve, reject) => {
            UserService.findUser(id).then(result => {
                const emailId = result[0].email;
                eventEmitter.on('sentEmail', this.emailEventHandler(emailId));
                eventEmitter.emit('sentEmail');
                 
                // const _path = path.resolve('./', 'src/templates/test.html');
                // const rs = fs.createReadStream(_path);
                // rs.on('open', this.fileEventHandler);
            }).catch(err => {
                reject(err);
            });
        })
    }

    fileEventHandler() {
        console.log('File opened');
    }

    emailEventHandler(email) {
        EmailService.sendEmail().then(result => {
            console.log('email sent');
        }).catch(err => {
            console.log('Failed to send email');
        });
    }

}

module.exports = new EventService();