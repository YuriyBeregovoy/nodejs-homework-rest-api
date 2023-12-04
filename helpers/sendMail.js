const nodemailer = require('nodemailer');

const { PASSWORD_MAILTRAP, USER_MAILTRAP } = process.env;


const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: USER_MAILTRAP,
    pass: PASSWORD_MAILTRAP,
  }
});



const sendMail = (mailOptions) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

module.exports = sendMail;