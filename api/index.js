import express from "express";
import dotenv from "dotenv";
import nodemailer from 'nodemailer'

dotenv.config();

const transporter=nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    secure: false,
    port:587,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
})

const app = express();
app.get('/',(req,res)=>{
    res.send("hello world!");
    const mailOptions={
        from:process.env.EMAIL,
        to:process.env.TO_EMAIL,
        subject:"Sending Email using node.js",
        text:"that was easy!"
    }
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log(err)
        }else{
            console.log("ëmail sent" +info.response)
        }
    })
})

const Port = process.env.PORT;
app.listen(Port, () => {
  console.log("listening on port " + Port);
});
