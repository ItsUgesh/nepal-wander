import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_APP_PASSWORD = process.env.EMAIL_APP_PASSWORD;

    if (!EMAIL_USER || !EMAIL_APP_PASSWORD) {
      console.error('Email user or App Password is missing in environment variables.');
      return NextResponse.json(
        { error: 'Contact service is currently misconfigured.' },
        { status: 500 }
      );
    }

    // Configure Nodemailer transporter for Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: EMAIL_USER, // Sends the contact submission straight to your Gmail inbox
      replyTo: email, // Clicking "Reply" in your email inbox will send the reply to the form submitter
      subject: `NepalWander Contact: ${subject}`,
      html: `
        <h3>New Contact Message from NepalWander</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background: #f4f6f8; padding: 1rem; border-radius: 8px; border: 1px solid #e6ecf0;">${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Nodemailer SMTP email error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
