const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
   // host: "smtp.gmail.com",
    //port: 465,
    auth: {
        user: 'krishghatul@gmail.com',
        pass: 'Krish@test'
    },
    tls:{
        rejectUnauthorized:false
    }
});

class EmailService {

    constructor() {

    }

    sendEmail() {
        const mailOptions = {
            from: 'krishghatul@gmail.com',
            to: 'krishna.ghatul@weboniselab.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
        };

        return new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(info);
            });
        })
    }

}

module.exports = new EmailService();

// send email to more than one email address
// var mailOptions = {
//     from: 'youremail@gmail.com',
//     to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
//   }

// send email with html
//   var mailOptions = {
//     from: 'youremail@gmail.com',
//     to: 'myfriend@yahoo.com',
//     subject: 'Sending Email using Node.js',
//     html: '<h1>Welcome</h1><p>That was easy!</p>'
//   }