import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
  const { name, email, phone, note } = req.body;

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

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Could not send the email. Message wasn't sent." });
  }

  return res.status(200).json({ message: "success" });
}
