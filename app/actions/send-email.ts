"use server"

import nodemailer from "nodemailer"

interface EmailData {
  fullName: string
  email: string
  message: string
}

export async function sendEmail(data: EmailData) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: "gwiavanderetienne2@gmail.com",
      subject: `New Contact Form Message from ${data.fullName}`,
      text: `
        Name: ${data.fullName}
        Email: ${data.email}
        Message: ${data.message}
      `,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)
    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "Failed to send email. Please try again." }
  }
}

