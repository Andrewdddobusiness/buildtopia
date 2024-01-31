"use server";
import axios from "axios";

export default async function handleRequest(email: string) {
  const client = axios.create({
    baseURL: "https://api.sendgrid.com/v3",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
  });
  const senderId = process.env.SENDER_ID;
  const designId = process.env.DESIGN_ID;
  console.log(senderId);
  console.log(designId);

  const data = {
    name: "Welcome Email", // Provide a name for your Single Send
    send_at: null, // Set to null for an unscheduled draft
    send_to: {
      email: email,
    },
    email_config: {
      sender_id: senderId,
      design_id: designId, // Use the design email ID from your environment variables
      editor: "design", // Use "code" or "design" based on your preference
    },
  };

  try {
    const response = await client.post("/marketing/singlesends", data);

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to make request to SendGrid API");
  }
}
