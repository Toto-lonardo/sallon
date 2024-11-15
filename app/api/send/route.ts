import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }
  try {
    const body = await req.json();
    const { firstName, lastName, email, subject, message } = body;
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: `${firstName} ${lastName} <info@sallon.it>`,
      to: [process.env.RESEND_EMAIL_FORWARD || "delivered@resend.dev"],
      subject: subject,
      react: EmailTemplate({
        firstName,
        lastName,
        email,
        subject,
        message,
      }),
    });

    if (error) {
      return NextResponse.json(
        { message: "Email sending failed", error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      //:FIXIT
      { message: "Email sent", data },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}
