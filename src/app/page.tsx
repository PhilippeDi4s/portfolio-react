import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { PortfolioSwitcher } from "../components/portfolio";
import { SectionDivider } from "../components/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <PortfolioSwitcher />
      <SectionDivider />
      <AboutMe />
      <SectionDivider />
      <Contact />
    </>
  );
}
