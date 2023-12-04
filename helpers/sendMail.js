const nodemailer = require("nodemailer");
require("dotenv").config();


const sendMail = async (emailOptions) => {
const { META_PASSWORD } = process.env;

const nodemailerCnfg = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: 'yuriy_beregovoy@meta.ua',
    pass: META_PASSWORD
  }

};

const transport = nodemailer.createTransport(nodemailerCnfg);

// const email = {
//   to: "yuriy_beregovoy@meta.ua",
//   from: "yuriy_beregovoy@meta.ua",
//   subject: "Test email",
//   html: "<p><strong>Test email</strong> from localhost: 3000</p>"
// };

// transport.sendMail(email)
//   .then(() => console.log("Email send success"))
//   .catch(error => console.log(error.message));

  try {
    const info = await transport.sendMail(emailOptions);
    console.log("Email sent: " + info.response);
    return info;
  } catch (error) {
    console.error("Error sending email: ", error.message);
    throw new Error("Error sending email");
  }
};

module.exports = sendMail;