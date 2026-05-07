import { SectionDivider } from "../components/SectionDivider";
import { AboutMe } from "../components/sections/AboutMe";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { PortfolioSwitcher } from "../components/switcher/PortfolioSwitcher";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider/>
      <PortfolioSwitcher />
      <SectionDivider/>
      <AboutMe />
      <SectionDivider/>
      <Contact />
    </>
  );
}
