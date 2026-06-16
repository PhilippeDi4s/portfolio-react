import { useRef, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

type EmblaApi = ReturnType<typeof useEmblaCarousel>[1];

type CarouselTextDotsProps = {
  slidesTitle: string[];
  emblaApi: EmblaApi;
};

export function CarouselTextDots({
  slidesTitle,
  emblaApi,
}: CarouselTextDotsProps) {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    buttonRefs.current[selectedIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [selectedIndex]);

  const carouselButtonStyle =
    "shrink-0 border border-white/60 py-3 px-6 rounded-sm transition hover:bg-(--gray) cursor-pointer text-[.8rem]";

  const carouselSelectedButtonStyle = `${carouselButtonStyle} grow bg-(--gray) font-semibold max-w-[20rem]`;

  return (
    <div className="mt-5 flex justify-center gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {slidesTitle.map((slide, i) => (
        <button
          key={i}
          ref={(el) => {
            buttonRefs.current[i] = el;
          }}
          className={
            selectedIndex === i
              ? carouselSelectedButtonStyle
              : carouselButtonStyle
          }
          onClick={() => scrollTo(i)}
        >
          {i + 1}
          {selectedIndex === i && `. ${slide}`}
        </button>
      ))}
    </div>
  );
}
