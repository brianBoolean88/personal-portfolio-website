import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { firstname, lastname, email, subject, message } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['88brianw@gmail.com'],
      subject: subject || 'New Contact Form Submission',
      html: `<p><b>Name:</b> ${firstname} ${lastname}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b><br/>${message}</p>`,
    });

    if (error) {
      return new Response(JSON.stringify(error), { status: 400 });
    }
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}