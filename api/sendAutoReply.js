import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Missing name or email" });
  }

  try {
    await resend.emails.send({
      from: "Talon Cleaning Services <customersupport@taloncleaningservices.co.uk>",
      to: email,
      subject: "Thank You for Your Request!",
      html: `
        <p>Hello ${name},</p>

        <p>Thank you for choosing <strong>Talon Cleaning Services</strong>.</p>

        <p>We’re pleased to support you with your cleaning requirements and look forward to delivering a reliable, high-quality service.</p>

        <p><strong>What happens next:</strong></p>
        <ul>
          <li>Our team will reach out to you to discuss your request.</li>
        </ul>

        <p>If you have any questions or special requests, please feel free to contact us at any time.</p>

        <p>Kind regards,<br/>
        Talon Cleaning Services</p>
      `,
    });

    return res.status(200).json({ message: "Auto-reply sent" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
