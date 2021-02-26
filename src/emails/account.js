const sgMail = require("@sendgrid/mail");
const sendgridAPIKey = "e2d2e9c7-6d24-5613-8d83-316582a1cb49";

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
  to: "tester@email.com",
  from: "other.tester@email.com",
  subject: "This is the subject",
  text: "This is the body of the email",
});
