import type { APIRoute } from 'astro';
import type { ContactForm, EmailResponse } from '../../types';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data: ContactForm = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Please fill in all required fields',
        } as EmailResponse),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Invalid email address',
        } as EmailResponse),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // TODO: Implement email sending logic here
    // You can use services like:
    // - Resend (https://resend.com)
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    // Example email body
    const emailBody = `
      New Contact Form Submission:

      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone || 'Not provided'}
      Company: ${data.company || 'Not provided'}

      Message:
      ${data.message}
    `;

    console.log('Contact form submission:', emailBody);

    // For now, we'll simulate a successful response
    // In production, uncomment and implement your email service here

    /*
    // Example with Resend:
    import { Resend } from 'resend';
    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'contact@gh360hunting.com',
      to: 'contact@gh360hunting.com',
      subject: `New Contact Form: ${data.name}`,
      text: emailBody,
    });
    */

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you for your message. We will contact you soon!',
      } as EmailResponse),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    return new Response(
      JSON.stringify({
        success: false,
        message: 'An error occurred. Please try again later.',
      } as EmailResponse),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
