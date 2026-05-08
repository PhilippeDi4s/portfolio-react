import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Heading } from "../../Heading";
import { SplitLayout } from "../../layout/SplitLayout";
import { IconLink } from "../../IconLink";
import { GITHUB, LINKEDIN, RESUME } from "../../../lib/const";
import { ContactForm } from "../../ContactForm";
import Link from "next/link";

export function Contact() {
  return (
    <SplitLayout
      sectionId="contato"
      contentSize={[0.8, 1]}
      alignComponents="start"
    >
      <SplitLayout.Left>
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

// rightContent={<ContactForm/>}
