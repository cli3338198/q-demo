import { useTranslation } from "react-i18next";
import {
  AboutContainer,
  AboutContent,
  AboutDescription,
  AboutImage,
  AboutTitle,
} from "../../styles/about";

export default function About() {
  const { t } = useTranslation();

  return (
    <AboutContainer id={"about"}>
      <AboutImage src="/assets/hands.jpg" />
      <AboutContent>
        <AboutTitle variant="h2">{t("Who are we")}?</AboutTitle>
        <AboutDescription variant="subtitle1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat odit
          necessitatibus voluptas commodi, a ut expedita architecto maiores
          accusamus mollitia nihil, quisquam praesentium aperiam perferendis
          voluptate sunt consequuntur, consectetur vel?
        </AboutDescription>
        <AboutDescription variant="subtitle1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          autem culpa deleniti quisquam nulla libero doloremque ab laudantium
          sequi suscipit! Consequuntur veniam corrupti enim fugit nemo esse id
          officiis iusto!
        </AboutDescription>
      </AboutContent>
    </AboutContainer>
  );
}
