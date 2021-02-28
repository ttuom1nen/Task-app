const sgMail = require("@sendgrid/mail");
const sendgridAPIKey = "e2d2e9c7-6d24-5613-8d83-316582a1cb49";

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "other.tester@email.com",
    subject: "Thank you for joining in!",
    text: `Welcome to the app, ${name}!`,
  });
};

module.exports = {
  sendWelcomeEmail,
};
