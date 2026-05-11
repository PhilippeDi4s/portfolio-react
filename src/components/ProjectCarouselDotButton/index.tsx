import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState
} from "react"

import { EmblaCarouselType } from "embla-carousel"

type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return

      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return

    const handleInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList())
    }

    const handleSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    handleInit()

    handleSelect()

    emblaApi.on("reInit", handleInit)
    emblaApi.on("reInit", handleSelect)
    emblaApi.on("select", handleSelect)

    return () => {
      emblaApi.off("reInit", handleInit)
      emblaApi.off("reInit", handleSelect)
      emblaApi.off("select", handleSelect)
    }
  }, [emblaApi])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}

type PropType = ComponentPropsWithRef<"button">

export const DotButton = (props: PropType) => {
  const { children, ...restProps } = props

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}