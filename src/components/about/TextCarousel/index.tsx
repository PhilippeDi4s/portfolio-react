import useEmblaCarousel from "embla-carousel-react";
import { SkillsSlidesContentType } from "../SkillsContent";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Fade from "embla-carousel-fade";
import { Heading } from "../../Heading";
import { useLightbox } from "@/src/hook/useLightBox";
import { Lightbox } from "../../LightBox";
import { CarouselTextDots } from "../CarouselTextDots";

type TextCarouselProps = {
  slides: SkillsSlidesContentType;
  paragraphStyle: string;
};

export function TextCarousel({ slides, paragraphStyle }: TextCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Fade()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const lightbox = useLightbox();

  const slidesTitle: string[] = slides.map((slide) => slide.title);

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

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

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="flex flex-col w-full min-w-0 shrink-0 grow-0 basis-full gap-2"
            >
              <Heading as="h2">{slide.title}</Heading>
              <div className="flex flex-col justify-between gap-10 md:flex-col xl:flex-row">
                <p className={paragraphStyle}>{slide.content}</p>
                <Image
                  className="rounded-xl cursor-zoom-in border border-white/40 md:mx-auto"
                  alt={slide.title}
                  src={slide.image}
                  width={700}
                  height={550}
                  onClick={() => lightbox.open(slide.image)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <CarouselTextDots emblaApi={emblaApi} slidesTitle={slidesTitle} />
      <Lightbox boxW={80} boxH={80} src={lightbox.src} onClose={lightbox.close} />
    </>
  );
}
