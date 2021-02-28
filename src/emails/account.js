const sgMail = require("@sendgrid/mail");

// Not a real api key
const sendgridAPIKey = "";

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "someone@taskapp.com",
    subject: "Thank you for joining in!",
    text: `Welcome to the app, ${name}!`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "someone@taskapp.com",
    subject: "Sorry to hear that you are leaving...",
    text: `...You are always welcome back, ${name}!`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
