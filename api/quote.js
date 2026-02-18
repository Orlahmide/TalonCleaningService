import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Include all fields that the form sends
  const { name, email, phone, service, frequency, contact, message } = req.body;

  try {
    await resend.emails.send({
      from: 'Talon Cleaning <quotes@mail.taloncleaningservices.co.uk>',
      to: 'support-a@taloncleaningservices.co.uk', // your inbox
      replyTo: email,
      subject: `New Quote Request - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0F2A44; line-height: 1.5; max-width: 600px; margin: auto; border: 1px solid #E0E0E0; padding: 20px; border-radius: 8px; background-color: #FFFFFF;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #C6A35A; margin: 0;">Talon Cleaning Services</h1>
            <p style="margin: 5px 0 0 0; font-size: 14px; color: #555;">New Quote Request Notification</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr style="background-color: #F9F9F9;">
              <td style="padding: 8px; font-weight: bold;">Email:</td>
              <td style="padding: 8px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Phone:</td>
              <td style="padding: 8px;">${phone}</td>
            </tr>
            <tr style="background-color: #F9F9F9;">
              <td style="padding: 8px; font-weight: bold;">Service:</td>
              <td style="padding: 8px;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Frequency:</td>
              <td style="padding: 8px;">${frequency}</td>
            </tr>
            <tr style="background-color: #F9F9F9;">
              <td style="padding: 8px; font-weight: bold;">Preferred Contact:</td>
              <td style="padding: 8px;">${contact}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 8px;">${message}</td>
            </tr>
          </table>

          <p style="margin-top: 20px; font-size: 14px; color: #777;">
            This quote request was submitted via the Talon Cleaning Services website.
          </p>

          <div style="text-align: center; margin-top: 30px;">
            <p style="font-size: 12px; color: #AAA;">&copy; ${new Date().getFullYear()} Talon Cleaning Services. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error sending email' });
  }
}
