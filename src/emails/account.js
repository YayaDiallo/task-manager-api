const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENGRID_API_KEY);

const sendWelcomeEmail = async (email, name) => {
  const msg = {
    to: email,
    from: 'yayazdiallo@outlook.fr',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app ${name}. Let me know how you get along with the app`,
  };

  try {
    await sgMail.send(msg);
  } catch (err) {
    console.error(err);
  }
};

const sendCancelationEmail = async (email, name) => {
  const msg = {
    to: email,
    from: 'yayazdiallo@outlook.fr',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
  };

  try {
    await sgMail.send(msg);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { sendWelcomeEmail, sendCancelationEmail };
