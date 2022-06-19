// import { Typography, useMediaQuery } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
import {
  MissionContainer,
  MissionContent,
  MissionDescription,
  MissionTitle,
} from "../../styles/mission";

export default function Mission() {
  return (
    <MissionContainer id={"mission"}>
      <MissionContent>
        <MissionTitle variant="h2">Our Mission</MissionTitle>
        <MissionDescription variant="subtitle1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
          beatae aliquam, blanditiis, voluptatibus saepe qui assumenda
          cupiditate voluptatem quasi laudantium culpa, dolore suscipit autem
          cumque sit veniam iure ea placeat. Quas eos, magnam perferendis harum
          enim ratione omnis a est!
        </MissionDescription>
        <MissionDescription variant="subtitle1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          cupiditate id animi repellendus minima aperiam eum impedit optio
          accusantium nesciunt beatae molestiae perferendis dolores voluptatum,
          reprehenderit eveniet numquam, sapiente placeat.
        </MissionDescription>
      </MissionContent>
    </MissionContainer>
  );
}
