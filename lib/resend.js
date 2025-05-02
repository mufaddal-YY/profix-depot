"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const { firstName, lastName, email, phone } = formData;
  const htmlContent = `
    <h2>New Enquiry Received</h2>
    <p><strong>Firstname:</strong> ${firstName}</p>
    <p><strong>Lastname</strong> ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
  `;
  await resend.emails.send({
    to: "profixdepot@gmail.com",
    from: "New Enquiry <onboarding@resend.dev>",
    subject: "New Enquiry",
    html: htmlContent,
  });
};