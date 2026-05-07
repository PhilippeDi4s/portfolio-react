type CardTypeOptions = "project" | "certificate";

type CardProps = {
  cardImgUrl: string;
  cardImgAlt: string;
  cardImgPosition?: "center" | "top" | "left" | "right" | "bottom";
  cardTitle?: string;
  cardText?: string;
  cardPadding?: "normal" | "small";
  cardType: CardTypeOptions;
  children?: React.ReactElement;
};

import clsx from "clsx";
import Image from "next/image";

export function Card({
  cardImgUrl,
  cardImgAlt,
  cardImgPosition = "top",
  cardTitle,
  cardText,
  cardPadding = "normal",
  cardType,
  children,
}: CardProps) {
  const paddingSize = {
    normal: "px-4.5 py-8",
    small: "p-2.75",
  };
  const cardImageType = {
    certificate: "h-auto",
    project: "h-[clamp(15rem,100vw,25rem)] md:h-[33rem] lg:h-[38rem] xl:h-[28rem]",
  };
  return (
    <article
      className={clsx(
        "flex",
        "flex-col",
        "gap-6",
        "w-full",
        "max-w-255",
        "bg-(--surface-card)",
        "rounded-xl",
        paddingSize[cardPadding],
        "border",
        "border-white/20",
        "group",
        "overflow-hidden",
        "hover:bg-(--surface-card-hover)",
        "transition",
        "duration-500",
        "md:p-8",
      )}
    >
      {!!cardImgUrl && (
        <div className="overflow-hidden rounded-xl">
          <Image
            width={500}
            height={300}
            src={cardImgUrl}
            alt={cardTitle ? `Imagem do projeto ${cardTitle}` : cardImgAlt}
            className={clsx(
              "w-full",
              "object-cover",
              "transition-transform",
              cardImageType[cardType],
              "duration-500",
              "group-hover:scale-140",
            )}
            style={{ objectPosition: `${cardImgPosition}` }}
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
      {!!cardText && <p className="flex-1">{cardText}</p>}
      {children}
    </article>
  );
}

// type CardProps = {
//   cardImgUrl?: string;
//   cardImgPosition?: ObjectPosition;
//   cardImgAlt?: string;
//   cardTitle?: string;
//   cardText?: string;
//   cardPadding?: "normal" | "small";
//   children?: React.ReactElement;
// };

// import clsx from "clsx";

// export function Card({
//   cardImgUrl,
//   cardImgPosition,
//   cardImgAlt,
//   cardTitle,
//   cardText,
//   cardPadding = "normal",
//   children,
// }: CardProps) {
//   const paddingSize = {
//     normal: "px-4.5 py-8",
//     small: "p-2.75",
//   };
//   return (
//     <article
//       className={clsx(
//         "flex",
//         "flex-col",
//         "gap-6",
//         "w-full",
//         "max-w-255",
//         "bg-(--surface-card)",
//         "rounded-xl",
//         paddingSize[cardPadding],
//         "border",
//         "border-white/20",
//         "group",
//         "overflow-hidden",
//         "hover:bg-(--surface-card-hover)",
//         "transition",
//         "duration-500",
//         "md:p-8",
//       )}
//     >
//       {!!cardImgUrl && (
//         <div className="overflow-hidden rounded-xl">
//           <img
//             src={cardImgUrl}
//             alt={cardTitle ? `Imagem do projeto ${cardTitle}` : cardImgAlt}
//             className={clsx(
//               "w-full",
//               "h-[clamp(15rem,100vw,27rem)]",
//               "object-cover",
//               "transition-transform",
//               "duration-500",
//               "group-hover:scale-140",
//               "md:h-[clamp(27rem,100vw,40rem)]",
//               "lg:h-90",
//               "xl:h-105",
//             )}
//             style={{ objectPosition: `${cardImgPosition}` }}
//           />
//         </div>
//       )}

//       {!!cardTitle && (
//         <h3
//           className={clsx(
//             "text-(--secondary-color)",
//             "font-bold",
//             "text-[1.25rem]/5",
//             "md:text-[1.75rem]",
//           )}
//           style={cardImgUrl ? { marginTop: "1rem" } : { marginTop: "0" }}
//         >
//           {cardTitle}
//         </h3>
//       )}
//       {!!cardText && <p className="flex-1">{cardText}</p>}
//       {children}
//     </article>
//   );
// }
