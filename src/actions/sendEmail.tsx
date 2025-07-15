'use server';

import { Resend } from 'resend';
import { ContactFormData, ContactFormSchema } from '@/types';

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailResponse = {
  message: string;
  success: boolean;
  data?: any;
};

const DEFAULT_ERROR_MESSAGE = 'Something went wrong. Please try again later. Thank you!';

const createResponse = (message: string, success: boolean, data?: any): EmailResponse => ({
  message,
  success,
  data
});

export default async function sendEmail(contactFormData: ContactFormData): Promise<EmailResponse> {
  const validatedSchema = ContactFormSchema.safeParse(contactFormData);

  if (!validatedSchema.success) {
    return createResponse(DEFAULT_ERROR_MESSAGE, false);
  }

  try {
    const response = await resend.emails.send({
      from: 'My Portfolio <onboarding@resend.dev>',
      to: ['voncarcha@gmail.com'],
      subject: 'Contact Form Submission',
      html: `
        <p><strong>Name:</strong> ${contactFormData.name}</p>
        <p><strong>Email:</strong> ${contactFormData.email}</p>
        <p><strong>Message:</strong> ${contactFormData.message}</p>
      `,
    });

    if (response.error) {
      return createResponse(DEFAULT_ERROR_MESSAGE, false);
    }

    return createResponse('Message Sent. Thank you!', true, response.data);
  } catch (error: any) {
    return createResponse(DEFAULT_ERROR_MESSAGE, false);
  }
}
