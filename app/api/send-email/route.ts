import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { isValidEmail } from '@/lib/utils';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { to, subject, text, html, replyTo } = body;

        // Validate required fields
        if (!to || !subject) {
            return NextResponse.json(
                { message: 'Missing required fields: to, subject' },
                { status: 400 }
            );
        }

        // Validate email addresses to prevent header injection
        if (typeof to !== 'string' || !isValidEmail(to)) {
            return NextResponse.json(
                { message: 'Invalid recipient email address' },
                { status: 400 }
            );
        }

        // Validate replyTo if provided
        if (replyTo && (typeof replyTo !== 'string' || !isValidEmail(replyTo))) {
            return NextResponse.json(
                { message: 'Invalid reply-to email address' },
                { status: 400 }
            );
        }

        // Check for required environment variables
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Missing email configuration environment variables');
            return NextResponse.json(
                { message: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Create transporter using your email service
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Verify transporter configuration
        await transporter.verify();

        // Send email
        const info = await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to,
            replyTo: replyTo || undefined, // Allow replying directly to the sender
            subject,
            text,
            html,
        });

        console.log('Email sent successfully:', info.messageId);

        return NextResponse.json({ 
            message: 'Email sent successfully',
            messageId: info.messageId 
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            {
                message: 'Failed to send email',
                error: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}