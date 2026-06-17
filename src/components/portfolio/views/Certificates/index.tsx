import clsx from "clsx";
import { PortfolioCard } from "../../cards/PortfolioCard";

export function Certificates() {

  return (
    <>
      <section
        className={clsx(
          "flex",
          "flex-col",
          "items-center",
          "justify-center",
          "gap-6",
          "xl:grid",
          "xl:grid-cols-2",
          "xl:gap-8",
        )}
      >
        <PortfolioCard
          cardImgUrl="/images/certificates-images/certificado-10.jpg"
          cardImgAlt="Certificado Imersão de dados com alura"
          cardPadding="small"
          cardType="certificate"
        />
        <PortfolioCard
          cardImgUrl="/images/certificates-images/certificado-2.jpg"
          cardImgAlt="Certificado de conclusão de curso web frontend"
          cardPadding="small"
          cardType="certificate"
        />
        <PortfolioCard
          cardImgUrl="/images/certificates-images/certificado-3.jpg"
          cardImgAlt="Certificado Aluno Top"
          cardPadding="small"
          cardType="certificate"
        />
      </section>
    </>
  );
}
