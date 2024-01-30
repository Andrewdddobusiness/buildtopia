import { EmailTemplate } from "@/components/resend/welcome-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["andrewdddobusiness@gmail.com"],
      subject: "Hello world",
      text: "Hello, this is the text content of the email.",
      react: EmailTemplate({ firstName: "Andrew" }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
