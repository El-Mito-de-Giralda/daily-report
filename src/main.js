const nodemailer = require("nodemailer");

(async function run(){
console.log('Running my daily report...')
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: process.env.MAIL_USER_EMAIL, 
      pass: process.env.MAIL_USER-PASSWORD, 
    },
  });
  await transporter.sendMail({
    from: process.env.MAIL_FROM, 
    to: process.env.MAIL_TO, 
    subject: 'Daily report', 
    text: "Daily Report", 
    html: "<h1>Daily Report</h1>", 
  });
})();