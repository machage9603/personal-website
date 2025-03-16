// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type EmailData = {
  to: string;
  subject: string;
  text?: string;
  html?: string;
};

type ResponseData = {
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { to, subject, text, html } = req.body as EmailData;

  // Create a transporter using your email service (e.g., Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // Your Gmail App Password
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      html,
    });
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      message: 'Failed to send email',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}