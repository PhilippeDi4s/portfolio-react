import { z } from "zod";

const hasNoUnsafeChars = (val: string) => !/[<>{}"'`]/.test(val);

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Nome deve conter apenas letras")
    .refine(hasNoUnsafeChars, "Nome contém caracteres inválidos")
    .transform((val) => val.trim()),

  email: z
    .string()
    .min(1, "E-mail é obrigatório")
    .email("E-mail inválido")
    .max(254, "E-mail deve ter no máximo 254 caracteres")
    .toLowerCase()
    .refine(hasNoUnsafeChars, "E-mail contém caracteres inválidos"),

  subject: z
    .string()
    .min(5, "Assunto deve ter pelo menos 5 caracteres")
    .max(150, "Assunto deve ter no máximo 150 caracteres")
    .refine(hasNoUnsafeChars, "Assunto contém caracteres inválidos")
    .transform((val) => val.trim()),

  message: z
    .string()
    .min(20, "Mensagem deve ter pelo menos 20 caracteres")
    .max(5000, "Mensagem deve ter no máximo 5000 caracteres")
    .refine(hasNoUnsafeChars, "Mensagem contém caracteres inválidos")
    .transform((val) => val.trim()),
});

export type ContactFormFields = z.infer<typeof contactSchema>;
