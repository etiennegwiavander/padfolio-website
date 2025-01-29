"use server"

import nodemailer from "nodemailer"

interface EmailData {
  fullName: string
  email: string
  message: string
}

export async function sendEmail(data: EmailData) {
  console.log("Attempting to send email...")

  if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
    console.error("SMTP credentials are missing in environment variables")
    return {
      success: false,
      message: "Server configuration error. SMTP credentials are missing.",
    }
  }

  try {
    console.log("Creating transporter...")
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
      logger: true,
      debug: true, // Include debug logs
    })

    console.log("Verifying SMTP connection...")
    await transporter.verify()
    console.log("SMTP connection verified successfully")

    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.SMTP_EMAIL}>`,
      to: "gwiavanderetienne2@gmail.com",
      replyTo: data.email,
      subject: `New Contact Form Message from ${data.fullName}`,
      text: `
Name: ${data.fullName}
Email: ${data.email}
Message: ${data.message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; padding: 20px;">
  <h2 style="color: #333;">New Contact Form Message</h2>
  <p><strong>Name:</strong> ${data.fullName}</p>
  <p><strong>Email:</strong> ${data.email}</p>
  <p><strong>Message:</strong></p>
  <p style="white-space: pre-wrap;">${data.message}</p>
</div>
      `,
    }

    console.log("Sending email...")
    const info = await transporter.sendMail(mailOptions)
    console.log("Message sent successfully:", info.messageId)

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    }
  } catch (error) {
    console.error("Error in sendEmail:", error)

    if (error instanceof Error) {
      if (error.message.includes("EAUTH")) {
        console.error("Authentication failed. Check SMTP credentials.")
        return {
          success: false,
          message: "Authentication failed. Please check SMTP credentials.",
        }
      }
      if (error.message.includes("ETIMEDOUT")) {
        console.error("Connection timed out. Check network or firewall settings.")
        return {
          success: false,
          message: "Connection timed out. Please try again later.",
        }
      }
      // Log the full error message for debugging
      console.error("Full error message:", error.message)
    }

    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    }
  }
}

