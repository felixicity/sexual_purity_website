import { EmailTemplate } from "../../../email/EmailTemplate";
import { EmailSentConfirmation } from "@/email/EmailSentConfirmation";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

/* Helper function for the sending of confirmation email messages with nodemailer*/

async function main(transporter, email, firstname) {
  // send mail with defined transport
  const emailHtml = render(<EmailTemplate firstname={firstname} />);

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  const info = await transporter.sendMail({
    from: "sexualpurity03@gmail.com", // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: emailHtml, // html body
  });

  console.log("Message sent: %s", info.messageId);
}

export async function POST(req) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  if (req.method === "POST") {
    try {
      // Parse the request body as JSON
      const { fullname, email } = body;

      const firstname = fullname.split(" ")[0] || fullname;
      console.log(firstname);

      const data = await resend.emails.send({
        from: "Team Sexual Purity <onboarding@resend.dev>",
        to: "sexualpurity03@gmail.com",
        subject: "Registration successful",
        html: `<p>Hello there 👋 <br> ${firstname} just registered.<p>`,
        react: EmailSentConfirmation({ firstname }),
      });

      await main(transporter, email, firstname).catch(console.error); // send the user a registration confirmation email

      return NextResponse.json({ data });
    } catch (error) {
      return NextResponse.json({ error });
    }
  }
}
