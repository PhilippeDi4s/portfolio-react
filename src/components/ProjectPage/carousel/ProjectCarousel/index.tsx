"use client";

import styles from "./style.module.css";

import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";

import { DotButton, useDotButton } from "../ProjectCarouselDotButton";

import Image from "next/image";
import { useIsMobile } from "@/src/hook/useIsMobile";
import { useLightbox } from "@/src/hook/useLightBox";
import { Lightbox } from "@/src/components/LightBox";

type CarouselImage = {
  src: string;
  alt: string;
  imagePosition: "top" | "center" | "bottom" | "left" | "right";
};

type PropType = {
  images: {
    desktop: CarouselImage[];
    mobile?: CarouselImage[];
  };
};

export function ProjectCarousel({ images }: PropType) {
  const isMobile = useIsMobile();

  const lightBox = useLightbox();

  const imagesToRender =
    isMobile && images.mobile ? images.mobile : images.desktop;

  const [emblaRef, emblaApi] = useEmblaCarousel({ duration: 30 }, [Fade()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {imagesToRender.map((image, index) => (
              <div className={styles.embla__slide} key={index}>
                <Image
                  className={styles.embla__slide__img}
                  style={{
                    objectPosition: image.imagePosition,
                  }}
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  onClick={() => lightBox.open(image.src)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.embla__controls}>
          <div className={styles.embla__dots}>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`${styles.embla__dot} ${
                  index === selectedIndex ? styles["embla__dot--selected"] : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <Lightbox src={lightBox.src} onClose={lightBox.close} />
    </>
  );
}
