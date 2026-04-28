# How to Enable Email Forwarding

I've implemented a premium freelance contact form and an API route to handle submissions. To start receiving emails at `maciekgeneja@gmail.com`, you'll need to connect an email service. I recommend **Resend** as it's free, easy to use, and very developer-friendly.

## 1. Get a Resend API Key
1. Go to [Resend.com](https://resend.com) and create a free account.
2. Go to **API Keys** and create a new key.
3. Copy the key.

## 2. Add Environment Variable
Create or update your `.env.local` file in the root of your project:
```env
RESEND_API_KEY=re_your_api_key_here
```

## 3. Update the API Route
I've already prepared the code for you. You just need to install the `resend` package and uncomment a few lines in `app/api/contact/route.ts`.

### Install Resend:
```bash
npm install resend
```

### Update `app/api/contact/route.ts`:
```typescript
import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, businessName, businessDescription, projectType, budget, message } = body;

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Update this once you verify your domain
      to: 'maciekgeneja@gmail.com',
      subject: `New Freelance Inquiry: ${projectType} from ${name}`,
      html: `
        <h2>New Freelance Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${businessName}</p>
        <p><strong>Description:</strong> ${businessDescription}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
```

## Why Resend?
- **Reliable**: Emails won't go to spam.
- **Analytics**: You can see when emails are delivered and opened.
- **Free Tier**: 3,000 emails per month for free, which is perfect for a portfolio.
