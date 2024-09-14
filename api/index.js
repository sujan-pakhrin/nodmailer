import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import Mail from "./mail.js";

dotenv.config();

const app = express();
app.get("/", (req, res) => {
  res.send("hello world!");
  const mail = new Mail();
  mail.setTo(process.env.TO_EMAIL);
  mail.setSubject("Subject");
  mail.setText("hello from sujan Tamang");
  mail.send();
});
app.post('/posts', (req, res) => {

})

const Port = process.env.PORT;
app.listen(Port, () => {
  console.log("listening on port " + Port);
});
