import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Heading } from "../../Heading";
import { SplitLayout } from "../../layout/SplitLayout";
import { IconLink } from "../../IconLink";
import { gitHubLink, linkedinLink, resume } from "../../../lib/const";
import { ContactForm } from "../../ContactForm";

export function Contact() {
  return (
    <SplitLayout
    contentSize={[0.8, 1]}
      leftContent={
        <>
          <Heading textPosition="left">Vamos Nos Conectar!</Heading>
          <p>
            Diga olá para{" "}
            <span className="bold transition text-(--secondary-color) border-b hover:text-(--blue-200)">
              lisboa.philippes@gmail.com
            </span>{" "}
            <br/>
            Para mais informações, aqui está meu{" "}
            <a
              href={resume}
              target="_blank"
              className="bold transition text-(--secondary-color) border-b hover:text-(--blue-200)"
            >
              currículo
            </a>
          </p>
          <nav className="flex gap-4">
            <IconLink
              href={linkedinLink}
              icon={<FaLinkedin size={48} />}
              type="minimal"
            />
            <IconLink
              href={gitHubLink}
              icon={<FaGithub size={48} />}
              type="minimal"
            />
          </nav>
        </>
      }
      rightContent={<ContactForm/>}
      alignComponents="start"
      leftContentPosition="start"
    />
  );
}
