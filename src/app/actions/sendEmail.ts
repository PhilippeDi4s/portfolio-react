"use server";
import { ContactFormFields, contactSchema } from "@/src/lib/contactSchema";
import { setDelay } from "@/src/utils/setDelay";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormFields) {
  await setDelay(5000);
  const result = contactSchema.safeParse(data);
  if (!result.success) {
    throw new Error("Dados inválidos");
  }

  try {
    const { error } = await resend.emails.send({
      from: "portfolio@diasphilippe.dev.br",
      to: "lisboa.philippes@gmail.com",
      subject: data.subject,
      html: data.subject,
    });

    if (error) {
      return {
        success: false,
        message: "Serviço fora do ar, tente novamente mais tarde.",
      };
    }

    return { success: true, message: "Email enviado com sucesso!" };
  } catch (err) {
    console.error("Unexpected error:", err);
    return {
      success: false,
      message: "Serviço fora do ar, tente novamente mais tarde.",
    };
  }
}
