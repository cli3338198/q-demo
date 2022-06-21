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
  return (
    <ValueContainer id={"values"}>
      <ValueHeader>Our Values</ValueHeader>
      <ValueContent>
        <Value>
          <ValueImage src="./assets/values1.jpg" />
          <ValueTitle variant="h6">Innovation</ValueTitle>
          <ValueDescription>Be Curious and Adventurous.</ValueDescription>
          <ValueParagraph>
            We question conventional wisdom and challenge the status quo. If
            there is a better way, we'll find it. We're excited by ingenuity and
            thrilled to try something new.
          </ValueParagraph>
        </Value>
        <Value>
          <ValueImage src="./assets/values2.jpg" />
          <ValueTitle variant="h6">Growth</ValueTitle>
          <ValueDescription>
            Embrace Opportunities To Learn and Improve
          </ValueDescription>
          <ValueParagraph>
            We invest in ourselves not just to grow as an organization but also
            as individuals. Through personal development and improvement we
            enrich our lives.
          </ValueParagraph>
        </Value>
        <Value>
          <ValueImage src="./assets/values3.jpg" />
          <ValueTitle variant="h6">Compassion</ValueTitle>
          <ValueDescription>
            Observe, Listen, Understand and Assist.
          </ValueDescription>
          <ValueParagraph>
            Everyone we work with experiences the same hopes and fears. Our
            compassion is what allows us to understand where we're needed and
            how we can help.
          </ValueParagraph>
        </Value>
      </ValueContent>
    </ValueContainer>
  );
}
