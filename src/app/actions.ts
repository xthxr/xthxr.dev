'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function sendEmail(data: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid data provided.',
    };
  }

  const { name, email, message } = validatedFields.data;

  // In a real application, you would integrate an email service like SendGrid, Resend, or Nodemailer here.
  // For this example, we'll just log the data to the console.
  console.log('--- New Contact Form Submission ---');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  console.log('-----------------------------------');
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Always return success for this example
  return {
    success: true,
    message: 'Your message has been sent successfully!',
  };
}
