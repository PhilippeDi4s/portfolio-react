import {
  MailIcon,
  MessageSquareIcon,
  TagIcon,
  UserIcon,
  SendIcon,
  CircleAlertIcon,
} from "lucide-react";
import { ActionGradient } from "../ActionGradient";

export function ContactForm() {
  const inputGroupStyle = "flex flex-col gap-0.5";

  const inputWrapperStyle = "relative flex flex-col gap-1";

  const inputsStyle =
    "outline-1 outline-white/30 rounded-[12px] p-[1rem] pl-[3rem] bg-[rgba(255,255,255,0.13)] w-full transition duration-300 leading-[1.5] focus:outline-offset-1 focus:outline-white";

  const iconStyle = "absolute left-[0.75rem] top-[1.2rem] text-[1rem]";

  return (
    <form
      action=""
      className="w-full bg-(--surface-card) rounded-xl p-4 flex flex-col gap-6"
    >
      <h3 className="text-[1.5rem] text-(--secondary-color) font-bold mb-3">
        Entre em contato
      </h3>

      <div className={inputGroupStyle}>
        <label htmlFor="name">Nome</label>
        <div className={inputWrapperStyle}>
          <UserIcon className={iconStyle} />
          <input
            type="text"
            id="name"
            min={3}
            placeholder="Seu Nome"
            className={inputsStyle}
            required
          />
          <span className="flex items-center gap-2 text-red-600 text-[1rem]">
            <CircleAlertIcon size={20} /> Nome inválido
          </span>
        </div>
      </div>

      <div className={inputGroupStyle}>
        <label htmlFor="email">E-mail</label>
        <div className={inputWrapperStyle}>
          <MailIcon className={iconStyle} />
          <input
            type="email"
            id="email"
            min={6}
            placeholder="Seu E-mail"
            className={inputsStyle}
            required
          />
        </div>
      </div>

      <div className={inputGroupStyle}>
        <label htmlFor="subject">Assunto</label>
        <div className={inputWrapperStyle}>
          <TagIcon className={`${iconStyle} rotate-90`} />
          <input
            type="text"
            id="subject"
            min={10}
            placeholder="Assunto"
            className={inputsStyle}
            required
          />
        </div>
      </div>

      <div className={inputGroupStyle}>
        <label htmlFor="message">Mensagem</label>
        <div className={inputWrapperStyle}>
          <MessageSquareIcon className={iconStyle} />
          <textarea
            name="message"
            id="message"
            className={`${inputsStyle} min-h-30`}
            minLength={20}
            required
          ></textarea>
        </div>
      </div>
      <ActionGradient text="Enviar" icon={<SendIcon />} type="submit" />
    </form>
  );
}
