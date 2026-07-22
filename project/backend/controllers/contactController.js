import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // port 465 uses SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
export const contact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // 1. Email to the school
    await transporter.sendMail({
      from: `"Wisdom School Website" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: subject || `New Contact Form Message from ${name}`,
      html: `
      <div style="font-family:Arial,sans-serif;padding:20px">
        <h2 style="color:#0B5ED7;">New Contact Form Submission</h2>

        <table cellpadding="8" cellspacing="0">
          <tr>
            <td><strong>Name:</strong></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><strong>Email:</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><strong>Subject:</strong></td>
            <td>${subject || "No subject"}</td>
          </tr>
        </table>

        <hr>

        <h3>Message</h3>

        <p>${message}</p>
      </div>
      `,
    });

    // 2. Automatic confirmation email to the visitor
    await transporter.sendMail({
      from: `"Wisdom School" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Wisdom School",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        </head>

        <body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">

        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:30px 0;">

        <tr>
        <td align="center">

        <table width="650" cellpadding="0" cellspacing="0"
        style="background:#ffffff;border-radius:8px;overflow:hidden;">

        <!-- Header -->
        <tr>
        <td
        style="background:#0B5ED7;padding:35px;text-align:center;color:white;">

        <h1 style="margin:0;font-size:30px;">
        Wisdom School
        </h1>

        <p style="margin-top:10px;font-size:16px;">
        Building Bright Futures
        </p>

        </td>
        </tr>

        <!-- Body -->
        <tr>
        <td style="padding:40px;">

        <h2 style="color:#333;">
        Hello ${name},
        </h2>

        <p style="font-size:16px;color:#555;line-height:1.8;">
        Thank you for contacting <strong>Wisdom School</strong>.
        </p>

        <p style="font-size:16px;color:#555;line-height:1.8;">
        We have successfully received your message.
        One of our staff members will review it and get back to you as soon as possible.
        </p>

        <div
        style="
        margin:30px 0;
        background:#f8f9fa;
        padding:20px;
        border-left:5px solid #0B5ED7;
        ">

        <h3 style="margin-top:0;color:#0B5ED7;">
        Your Message
        </h3>

        <p style="margin:0;color:#444;">
        ${message}
        </p>

        </div>

        <p style="font-size:16px;color:#555;">
        If your request is urgent, please contact us directly.
        </p>

        <table cellpadding="8">

        <tr>
        <td><strong>📞 Phone</strong></td>
        <td>+250 788 478469</td>
        </tr>

        <tr>
        <td></td>
        <td>+250 788 768880</td>
        </tr>

        <tr>
        <td></td>
        <td>+250 782 406217</td>
        </tr>

        <tr>
        <td><strong>📧 Email</strong></td>
        <td>wisdomschoolrwanda@gmail.com</td>
        </tr>

        <tr>
        <td><strong>📍 Address</strong></td>
        <td>Musanze, Rwanda</td>
        </tr>

        </table>

        <br>

        <p style="font-size:16px;color:#444;">
        Kind regards,
        </p>

        <h3 style="color:#0B5ED7;margin-top:0;">
        Wisdom School Admissions Office
        </h3>

        </td>
        </tr>

        <!-- Footer -->

        <tr>

        <td
        style="
        background:#0B5ED7;
        color:white;
        padding:20px;
        text-align:center;
        font-size:14px;
        ">

        © ${new Date().getFullYear()} Wisdom School<br>

        Thank you for choosing Wisdom School.

        </td>

        </tr>

        </table>

        </td>

        </tr>

        </table>

        </body>
        </html>
        `
    });
    res.status(200).json({
      success: true,
      message: "Emails sent successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
}