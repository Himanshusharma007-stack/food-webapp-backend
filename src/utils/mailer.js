const nodemailer = require("nodemailer");

const mailer = async (
  htmlbody = "<b>Hello world?</b>",
  subject = "Query From PlatterPulse!",
  sendTo = process.env.MAIL_SENT_TO || [ "hishrma02@gmail.com" ]
) => {
  try {
    let config = {
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    };

    let transporter = nodemailer.createTransport(config);

    let message = {
      from: process.env.GMAIL_USER,
      to: sendTo,
      subject: subject,
      //   text,
      html: htmlbody,
    };

    let info = await transporter.sendMail(message);
    return {
      msg: "Successfully submitted, we will contact you soon.",
      info: info.messageId,
      success: true
      //   preview: nodemailer.getTestMessageUrl(info),
    };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = mailer;
