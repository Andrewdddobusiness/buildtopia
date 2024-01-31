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

  const data = {
    list_ids: [process.env.LIST_ID],
    contacts: [{ email: email }],
  };

  try {
    const response = await client.put("/marketing/contacts", data);

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to make request to SendGrid API");
  }
}
