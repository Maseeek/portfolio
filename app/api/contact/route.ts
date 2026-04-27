import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, businessName, businessDescription, projectType, budget, message } = body;

    // Here you would typically send an email using a service like Resend, Mailgun, or Nodemailer
    // For example, with Resend:
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'maciekgeneja@gmail.com',
      subject: `New Freelance Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Business: ${businessName}
        Description: ${businessDescription}
        Project Type: ${projectType}
        Budget: ${budget}
        Message: ${message}
      `,
    });
    */

    console.log("Form data received at API:", body);

    // For now, we simulate success. 
    // To make this work, the user needs to set up an email service.
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
