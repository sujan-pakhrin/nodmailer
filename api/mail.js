import nodemailer from "nodemailer";
import dotenv from 'dotenv';

// Load environment variables from .env file
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

  // Set the company name in the "from" field
  setCompanyName(name) {
    this.mailOptions.from.name = name;  // Corrected typo from "form" to "from"
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
    // Corrected the reference to "this.mailOptions"
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
