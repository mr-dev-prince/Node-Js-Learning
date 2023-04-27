const nodemailer = require("nodemailer");  


// function 
const sendMail = async (req, res) => {

  // connnect with smtp

  let testAccount = await nodemailer.createTestAccount();
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email", // this is a fake host. google and aws have real SMTP service and host for use in real life production
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "boris.rogahn@ethereal.email", // fake SMTP service from Ethereal
      pass: "VBYAwjCMTVH9mrDJHC",
    },
  });

  let info = await transporter.sendMail({
    from: '"Prince Chaurasia" <princechaurasiaofficial24@gmail.com>', // sender address
    to: "pkcofficial24@gmailcom", // list of receivers
    subject: "The nodemailer has finally worked", // Subject line
    text: "This text is the content of the email received from the nodemailer", // plain text body
    html: "<b>sab changa si</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);

  res.end("I am sending mail :)");
};

module.exports = sendMail; // exporting the module to app.js
