// Another good example!

"use strict";
import * as nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: "xxxxx@hotmail.com.br",
    pass: "xxxxx",
  },
});

const mail = {
  from: '"Rodrigo Nery 👻" <xxxxxx@hotmail.com.br> ',
  to: "xxxxx@gmail.com, xxxxxx@hotmail.com.br",
  subject: "No subject.",
  text: "Hello World!",
  html: "<b>Hello World!</b>",
};

const mailer = {
  send: function (transporter, mail) {
    try {
      const info = transporter.sendMail(mail);
      console.log(
        "Message sent successfully!",
        nodemailer.getTestMessageUrl(info)
      );
      transporter.close();
    } catch (error) {
      console.error("Error occurred", error);
      throw error;
    }
  },
};

mailer.send(transporter, mail);
