import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

//to reset the password of the email
export const sendOtpMail = async (to, otp) => {
    await transporter.sendMail({
        from: process.env.EMAIL,
        to: to,
        subject: "Your Password Reset OTP",
        html: `<p>Your OTP for password reset is: <b>${otp}</b>. It is valid for 5 minutes.</p>`,
    });
};

// to send delivery OTP
export const sendDeliveryOtpMail = async (user, otp) => {
    await transporter.sendMail({
        from: process.env.EMAIL,
        to: user.email,
        subject: "Your Delivery OTP",
        html: `<p>Your OTP for delivery is: <b>${otp}</b>. It is valid for 5 minutes.</p>`,
    });
};