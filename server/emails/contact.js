const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendContactEmail = (name, email, msg, number, reason) => {
  sgMail.send({
    to: `tundeusman0@gmail.com`,
    from: email,
    subject: `UsmanIdowu website Message, reason: ${reason} from ${name} with phone number ${number}`,
    html: msg
  });
};

module.exports = {
  sendContactEmail
};
