import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { RESUME, LINKEDIN, GITHUB } from "@/src/lib/const";
import { ContactForm } from "./ContactForm";
import { IconLink } from "../IconLink";
import { SplitLayout } from "../layout/SplitLayout";
import { Heading } from "../Heading";

export function Contact() {
  return (
    <SplitLayout sectionId="contato" alignComponents="start" className="mb-6 md:mb-12 lg:mb-23 xl:mb-30">
      <SplitLayout.Left flex={0.8} className="gap-2">
        <Heading className="lg:whitespace-nowrap" textPosition="left">Vamos Nos Conectar!</Heading>
        <p className="mb-4">
          Diga olá para{" "}
          <span className="bold transition text-(--secondary-color) border-b hover:text-(--blue-200)">
            lisboa.philippes@gmail.com
          </span>{" "}
          <br />
          Para mais informações, aqui está meu{" "}
          <Link
            href={RESUME}
            target="_blank"
            className="bold transition text-(--secondary-color) border-b hover:text-(--blue-200)"
          >
            currículo
          </Link>
        </p>
        <nav className="flex gap-4 md:gap-8">
          <IconLink
            href={LINKEDIN}
            icon={<FaLinkedin/>}
            type="minimal"
          />
          <IconLink
            href={GITHUB}
            icon={<FaGithub/>}
            type="minimal"
          />
        </nav>
      </SplitLayout.Left>

      <SplitLayout.Right>
        <ContactForm />
      </SplitLayout.Right>
    </SplitLayout>
  );
}
