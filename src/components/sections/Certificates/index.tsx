import { Card } from "../../Card";

export function Certificates() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 xl:grid xl:grid-cols-2 xl:gap-8">
      <Card
        cardImgUrl="/images/certificates-images/certificado-1.png"
        cardImgAlt="Certificado Imersão de dados com alura"
        cardPadding="small"
        cardType="certificate"
      />
      <Card
        cardImgUrl="/images/certificates-images/certificado-2.png"
        cardImgAlt="Certificado de conclusão de curso web frontend"
        cardPadding="small"
        cardType="certificate"
      />
      <Card
        cardImgUrl="/images/certificates-images/certificado-3.jpg"
        cardImgAlt="Certificado Aluno Top"
        cardPadding="small"
        cardType="certificate"
      />
    </section>
  );
}
