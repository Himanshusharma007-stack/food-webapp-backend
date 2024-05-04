const nodemailer = require("nodemailer");

const mailer = async (
  //   text = "Hello world",
  htmlbody = "<b>Hello world?</b>",
  subject = "Query From PlatterPulse!",
  sendTo = [ "hishrma02@gmail.com" ]
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
      msg: "Email sent",
      info: info.messageId,
      //   preview: nodemailer.getTestMessageUrl(info),
    };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = mailer;
