import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { RESUME, LINKEDIN, GITHUB } from "@/src/lib/const";
import { ContactForm } from "../ContactForm";
import { IconLink } from "../IconLink";
import { SplitLayout } from "../layout/SplitLayout";
import { Heading } from "../Heading";

export function Contact() {
  return (
    <SplitLayout sectionId="contato" alignComponents="start">
      <SplitLayout.Left flex={0.8}>
        <Heading textPosition="left">Vamos Nos Conectar!</Heading>
        <p>
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
        <nav className="flex gap-4">
          <IconLink
            href={LINKEDIN}
            icon={<FaLinkedin size={48} />}
            type="minimal"
          />
          <IconLink
            href={GITHUB}
            icon={<FaGithub size={48} />}
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
