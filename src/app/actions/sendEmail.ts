"use server";
import { ContactFormFields, contactSchema } from "@/src/lib/contactSchema";
import { setDelay } from "@/src/utils/setDelay";
import { ratelimit } from "@/src/lib/ratelimit";
import { getIp } from "@/src/utils/getIp";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormFields) {
const ip = await getIp();
const { success, reset } = await ratelimit.limit(ip);

  if (!success) {
    const retryAfter = Math.ceil((reset - Date.now()) / 1000 / 60 / 60);
    return {
      success: false,
      message: `Limite de envios atingido. Tente novamente em ${retryAfter}h.`,
    };
  }

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
      html: data.message,
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