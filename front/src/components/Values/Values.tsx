import {
  ValueContainer,
  ValueContent,
  ValueHeader,
  Value,
  ValueImage,
  ValueDescription,
  ValueTitle,
} from "../../styles/values";

export default function Values() {
  return (
    <ValueContainer
      id={"values"}
      sx={{
        backgroundImage: "./assets/background2.webp",
      }}
    >
      <ValueHeader>Our Values</ValueHeader>
      <ValueContent>
        <Value>
          <ValueImage src="./assets/values1.jpg" />
          <ValueTitle variant="h6">Innovation</ValueTitle>
          <ValueDescription>
            Be Curious, Adventurous and Creative.
          </ValueDescription>
        </Value>
        <Value>
          <ValueImage src="./assets/values2.jpg" />
          <ValueTitle variant="h6">Growth</ValueTitle>
          <ValueDescription>
            Embrace Opportunities To Learn and Improve
          </ValueDescription>
        </Value>
        <Value>
          <ValueImage src="./assets/values3.jpg" />
          <ValueTitle variant="h6">Compassion</ValueTitle>
          <ValueDescription>
            Observe, Listen, Understand and Assist.
          </ValueDescription>
        </Value>
      </ValueContent>
    </ValueContainer>
  );
}
