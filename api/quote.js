import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, service, message } = req.body;

  try {
    await resend.emails.send({
      from: 'Talon Cleaning <quotes@mail.taloncleaningservices.co.uk>',
      to: 'support-a@taloncleaningservices.co.uk',
      reply_to: email,
      subject: `New Quote Request - ${service}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ message: 'Email sent' });

  } catch (error) {
    return res.status(500).json({ message: 'Error sending email' });
  }
}
