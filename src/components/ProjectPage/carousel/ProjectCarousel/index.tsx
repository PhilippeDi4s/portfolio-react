"use client";

import styles from "./style.module.css";

import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";

import { DotButton, useDotButton } from "../ProjectCarouselDotButton";

import Image from "next/image";

type CarouselImage = {
  src: string;
  alt: string;
  imagePosition: string
};

type PropType = {
  images: CarouselImage[];
};

export function ProjectCarousel(props: PropType) {
  const { images } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel({ duration: 30 }, [
    Fade(),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {images.map((image, index) => (
            <div className={styles.embla__slide} key={index}>
              <Image className={styles.embla__slide__img} style={{objectPosition: image.imagePosition}} src={image.src} alt={image.alt} width={500} height={500} />
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
  );
}
