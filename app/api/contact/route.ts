import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { writeClient } from '@/sanity/writeClient';

export async function POST(request: Request) {
  try {
    const { name, email, details, service } = await request.json();

    let saved = false;
    try {
      await writeClient.create({
        _type: 'contactSubmission',
        name,
        email,
        service: service || undefined,
        details,
        submittedAt: new Date().toISOString(),
      });
      saved = true;
    } catch (sanityError) {
      console.error('Failed to save submission to Sanity:', sanityError);
    }

    // Configure the email transporter
    // If using Google Workspace, 'gmail' works. Otherwise, replace with your SMTP host.
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: 'rez@rezinfocus.com', // Updated destination address
      replyTo: email, 
      subject: `New Booking Inquiry: ${service || 'General'} - ${name}`,
      text: `
        New inquiry from Rez in Focus Website:
        
        Name: ${name}
        Email: ${email}
        Service Interested In: ${service || 'General Inquiry'}
        
        Project Details:
        ${details}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (mailError) {
      if (!saved) throw mailError;
      console.error('Email failed but submission was saved:', mailError);
    }
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}