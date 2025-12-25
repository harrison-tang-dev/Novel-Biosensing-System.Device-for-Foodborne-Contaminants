import nodemailer from "nodemailer";
import path from "node:path";
import ejs from "ejs";
import { fileURLToPath } from "url";
import { emailOTP } from "../emailtemplates/Otpemail.js";
import { verifyEmailOTP } from "../emailtemplates/verifyemailotp.js";
import {memberregister} from "../emailtemplates/membersignup.js"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const emailTemplating = async (template, data) => {
  try {
    let templatePath;
    let templateData = {};
    switch (template) {

      case "forgotpasswordotp":
            templateData = emailOTP(data)
            break;

      case "emailverifyotp":
         templateData = verifyEmailOTP(data)
        break;

        case "memberregister":
          templateData = memberregister(data)
         break;
      // Add more cases as needed for your other email templates

    }

    // Render the EJS template with the specific data
    const mailBody = templateData

    return mailBody;
  } catch (error) {
    console.log("Error occurred while sending email: ", error);
    throw error;
  }
};

export const mailSender = async (email, title, body) => {
  try {
    // Create a Transporter to send emails
    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: process.env.NODEMAILER_PORT,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });
    // Send emails to users

 
    let info = await transporter.sendMail({
      from: `"SafePlate"${process.env.NODEMAILER_USER}`,
      to:  email ||'devserverdev@gmail.com',
      subject: title,
      html: body,
    });

    // console.log("Email info: ", info);
    return "Email sent successfully";
  } catch (error) {
    console.log(error);
  }
};


export const sendMailfunction = async (
  template,
  data,
  email,
  subject
) => {
  try {
    const mailBody = await emailTemplating(template, data);

    await mailSender(email, subject, mailBody);
  } catch (error) {
    console.log(error.message);
  }
};