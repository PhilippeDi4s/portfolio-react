"use client";
import {
  MailIcon,
  MessageSquareIcon,
  TagIcon,
  UserIcon,
  SendIcon,
} from "lucide-react";
import { ActionGradient } from "../../ActionGradient";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInput } from "../../FormInput";
import { FormTextArea } from "../../FormContextArea";
import { ContactFormFields, contactSchema } from "@/src/lib/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@/src/app/actions/sendEmail";
import { showMessage } from "@/src/adapters";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormFields>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormFields> = async (data) => {
    const result = await sendEmail(data);

    if (!result.success) {
      showMessage.error(result.message);
      return;
    }

    showMessage.succsses(result.message);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full bg-(--surface-card) rounded-xl p-4 flex flex-col gap-6"
    >
      <h3 className="text-[1.5rem] text-(--secondary-color) font-bold mb-3">
        Entre em contato
      </h3>

      <FormInput
        label="Nome"
        id="name"
        type="text"
        icon={UserIcon}
        placeholder="Seu Nome"
        min={3}
        required
        {...register("name")}
        error={errors.name?.message as string}
      />

      <FormInput
        label="E-mail"
        id="email"
        type="email"
        icon={MailIcon}
        placeholder="Seu E-mail"
        min={6}
        required
        {...register("email")}
        error={errors.email?.message as string}
      />

      <FormInput
        label="Assunto"
        id="subject"
        type="text"
        icon={TagIcon}
        iconClassName="rotate-90"
        placeholder="Assunto"
        min={10}
        required
        {...register("subject")}
        error={errors.subject?.message as string}
      />

      <FormTextArea
        label="Mensagem"
        id="message"
        icon={MessageSquareIcon}
        placeholder="Sua mensagem..."
        minLength={20}
        required
        {...register("message")}
        error={errors.message?.message as string}
      />

      <ActionGradient as="button" type="submit" disabled={isSubmitting}>
        <SendIcon />
        {isSubmitting ? "Enviando..." : "Enviar"}
      </ActionGradient>
    </form>
  );
}
