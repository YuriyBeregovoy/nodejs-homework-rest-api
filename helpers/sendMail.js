// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const { META_PASSWORD } = process.env;

// const nodemailerCnfg = {
//   host: "smtp.meta.ua",
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'yuriy_beregovoy@meta.ua',
//     pass: META_PASSWORD
//   }

// };

// const transport = nodemailer.createTransport(nodemailerCnfg);

// const email = {
//   to: 'recipient@example.com',
//   from: "yuriy_beregovoy@meta.ua",
//   subject: "Test email",
//   html: "<p><strong>Test email</strong> from localhost: 3000</p>"
// };

// transport.sendMail(email)
//   .then(() => console.log("Email send success"))
//   .catch(error => console.log(error.message));


const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'b3f4363e988e65',
    pass: 'aeaa24ba9daf0a'
  }
});

const mailOptions = {
  from: 'from@example.com',
  to: 'to@example.com',
  subject: 'Test Email',
  text: 'This is a test email from Mailtrap.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});