import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, phone, note } = await request.json();

  const user = process.env.user;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "adiamar2005@gmail.com",
      replyTo: email,
      subject: `Contact form from ${name}`,
      html: `
        <p>Full Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${note}</p>
        `,
    });

    console.log("Message sent: " + mail.messageId);
    return new Response(JSON.stringify({ message: "success" }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Could not send the email. Message wasn't sent." }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
} 