import { BlueLink } from "../BlueLink";
import { Button } from "../Button";
import { DefaultModal } from "../DefaultModal";
import { Heading } from "../Heading";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export function ContactModal({
  isOpen,
  onClose,
  onConfirm,
}: ContactModalProps) {
  return (
    <DefaultModal isOpen={isOpen} onClose={onClose}>
      <Heading as="h3">Antes de enviar!</Heading>
      <p className="indent-2 leading-6 hyphens-auto wrap-break-word text-justify md:leading-8.5 lg:indent-4">
        {" "}
        Para proteger este formulário contra spam e abuso,{" "}
        <strong>coletamos temporariamente </strong> seu endereço IP no momento
        do envio. Esse dado é usado exclusivamente para limitar a quantidade de
        mensagens enviadas por usuário e{" "}
        <strong>é automaticamente descartado após 24 horas.</strong> Não
        compartilhamos essa informação com terceiros, exceto os serviços
        técnicos necessários para o funcionamento do formulário (Upstash e
        Resend).
      </p>
      <div className="flex flex-wrap gap-5 justify-center items-center mt-8 md:gap-10 lg:gap-15">
        <Button variant="primary" size="lg" onClick={onConfirm}>
          Confirmar
        </Button>
        <Button variant="secondary" size="lg" onClick={onClose}>
          Cancelar
        </Button>
      </div>
    </DefaultModal>
  );
}
