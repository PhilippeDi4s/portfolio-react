"use client";

import clsx from "clsx";
import Image from "next/image";
import { useOverlay } from "@/src/hook/useOverlay";
import { Lightbox } from "@/src/components/LightBox";

type BaseCardProps = {
  cardImgUrl: string;
  cardImgPosition?: "center" | "top" | "left" | "right" | "bottom";
  cardTitle?: string;
  cardPadding?: "normal" | "small";
  children?: React.ReactElement;
};

type ProjectCardProps = BaseCardProps & {
  cardType: "project";
  cardTitle: string;
  cardImgAlt?: never;
};

type CertificateCardProps = BaseCardProps & {
  cardType: "certificate";
  cardImgAlt: string;
};

type CardProps = ProjectCardProps | CertificateCardProps;

export function PortfolioCard({
  cardImgUrl,
  cardImgAlt,
  cardImgPosition = "top",
  cardTitle,
  cardPadding = "normal",
  cardType,
  children,
}: CardProps) {
  const lightbox = useOverlay();

  const paddingSize = {
    normal: "p-2 md:px-4.5 md:py-8",
    small: "p-2.75",
  };

  const cardImageType = {
    certificate: "h-auto",
    project:
      "h-[clamp(10rem,100vw,25rem)] md:h-[33rem] lg:h-[38rem] xl:h-[28rem]",
  };

  return (
    <>
      <article
        className={clsx(
          "flex",
          "flex-col",
          "justify-between",
          "gap-6",
          "w-full",
          "max-w-255",
          "bg-(--surface-card)",
          "rounded-xl",
          paddingSize[cardPadding],
          "border",
          "border-white/1",
          "group",
          "overflow-hidden",
          "transition",
          "duration-500",
          "md:p-8",
          "hover:bg-(--surface-card-hover)",
          "hover:border-white/50",
        )}
      >
        {!!cardImgUrl && (
          <div className="overflow-hidden rounded-xl">
            <Image
              width={600}
              height={600}
              src={cardImgUrl}
              alt={
                cardType === "project"
                  ? `Imagem do projeto ${cardTitle}`
                  : cardImgAlt
              }
              className={clsx(
                "w-full",
                "object-cover",
                "transition-transform",
                cardImageType[cardType],
                "duration-500",
                "group-hover:scale-140",
                cardType === "certificate" && "cursor-zoom-in",
              )}
              style={{ objectPosition: cardImgPosition }}
              onClick={
                cardType === "certificate"
                  ? () => lightbox.open(cardImgUrl)
                  : undefined
              }
            />
          </div>
        )}

        {!!cardTitle && (
          <h3
            className={clsx(
              "text-(--secondary-color)",
              "font-bold",
              "text-[1.25rem]/5",
              "md:text-[1.75rem]",
            )}
            style={cardImgUrl ? { marginTop: "1rem" } : { marginTop: "0" }}
          >
            {cardTitle}
          </h3>
        )}
        {cardType === "project" && (
          <div className="flex flex-col gap-5 flex-1 justify-between [&>p]:flex-1">
            {children}
          </div>
        )}
      </article>

      {cardType === "certificate" && (
        <Lightbox src={lightbox.content} onClose={lightbox.close} />
      )}
    </>
  );
}
