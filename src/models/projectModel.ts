type CarouselImage = {
  src: string;
  alt: string;
  imagePosition: "top" | "center" | "bottom" | "left" | "right";
};

export type ProjectModel = {
  title: string;
  cardDescription: string;
  projectShortDescription: string[];
  projectDescription: string[];
  techUsed: string[];
  projectSource: string;
  projectType: string;
  imagesCarousel: {
    desktop: CarouselImage[];
    mobile?: CarouselImage[];
  };
  gitRepositoryLink: string;
  detailsLink: string;
  liveDemoLink: string;
};
