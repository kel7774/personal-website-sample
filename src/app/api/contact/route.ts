import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // In a production environment, you would send an email here.
    // For now, we'll log the message and simulate success.
    // To actually send emails, you would integrate with:
    // - Nodemailer with SMTP
    // - SendGrid
    // - Resend
    // - AWS SES
    // etc.

    console.log('Contact form submission:');
    console.log('To: landry.kel@gmail.com');
    console.log('From:', email);
    console.log('Name:', name);
    console.log('Message:', message);

    // Simulate a small delay like a real email send would have
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
