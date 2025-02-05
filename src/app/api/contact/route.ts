import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormData;
    const { name, email, subject, message } = body;

    // Create a test account if no email configuration is provided
    const testAccount = await nodemailer.createTestAccount();

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.ethereal.email",
      port: parseInt(process.env.SMTP_PORT ?? "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER ?? testAccount.user,
        pass: process.env.SMTP_PASS ?? testAccount.pass,
      },
    });

    // Send the email
    const info = await transporter.sendMail({
      from: `Contact Form <${process.env.CONTACT_EMAIL}>`,
      to: "info@quickconvert.app",
      subject: subject,
      text: message,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.split("\n").join("<br>")}</p>
      `,
    });

    // For development: Log the test email URL
    if (!process.env.SMTP_HOST) {
      console.log("Test email URL:", nodemailer.getTestMessageUrl(info));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
