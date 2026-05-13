type Image = {
    src: string;
    alt: string;
}

export type ProjectModel = {
    title: string;
    cardImageSrc: string;
    cardDescription: string;
    projectShortDescription: string[];
    projectDescription: string[];
    techUsed: string[];
    projectSource: string,
    projectType: string,
    imagesCarousel: Image[];
    gitRepositoryLink: string;
    detailsLink: string;
    liveDemoLink: string;
}