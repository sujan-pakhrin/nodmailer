import nodemailer from "nodemailer";
import dotenv from 'dotenv';


dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

class Mail {
  constructor() {
    this.mailOptions = {
      from: {
        address: process.env.EMAIL,
        name: "Sujan",
      },
    };
  }

  setCompanyName(name) {
    this.mailOptions.from.name = name;
  }

  setTo(receiver) {
    this.mailOptions.to = receiver;
  }

  setSubject(subject) {
    this.mailOptions.subject = subject;
  }

  setText(text) {
    this.mailOptions.text = text;
  }

  setHTML(html) {
    this.mailOptions.html = html;
  }

  send() {
    transporter.sendMail(this.mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
}

export default Mail;
