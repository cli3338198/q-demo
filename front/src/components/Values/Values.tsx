import { useTranslation } from "react-i18next";
import {
  ValueContainer,
  ValueContent,
  ValueHeader,
  Value,
  ValueImage,
  ValueDescription,
  ValueTitle,
  ValueParagraph,
} from "../../styles/values";

export default function Values() {
  const { t } = useTranslation();

  return (
    <ValueContainer id={"values"}>
      <ValueHeader>{t("Our Values")}</ValueHeader>
      <ValueContent>
        <Value>
          <ValueImage src="./assets/values1.jpg" />
          <ValueTitle variant="h6">{t("Innovation")}</ValueTitle>
          <ValueDescription>
            {t("Be Curious and Adventurous.")}
          </ValueDescription>
          <ValueParagraph>
            {t(
              "We question conventional wisdom and challenge the status quo. If there is a better way, we'll find it. We're excited by ingenuity and thrilled to try something new."
            )}
          </ValueParagraph>
        </Value>
        <Value>
          <ValueImage src="./assets/values2.jpg" />
          <ValueTitle variant="h6">{t("Growth")}</ValueTitle>
          <ValueDescription>
            {t("Embrace Opportunities To Learn and Improve")}
          </ValueDescription>
          <ValueParagraph>
            {t(
              "We invest in ourselves not just to grow as an organization but also as individuals. Through personal development and improvement we enrich our lives."
            )}
          </ValueParagraph>
        </Value>
        <Value>
          <ValueImage src="./assets/values3.jpg" />
          <ValueTitle variant="h6">{t("Compassion")}</ValueTitle>
          <ValueDescription>
            {t("Observe, Listen, Understand and Assist.")}
          </ValueDescription>
          <ValueParagraph>
            {t(
              "Everyone we work with experiences the same hopes and fears. Our compassion is what allows us to understand where we're needed and how we can help."
            )}
          </ValueParagraph>
        </Value>
      </ValueContent>
    </ValueContainer>
  );
}
