import {
  Teammember,
  TeammemberDescription,
  TeammemberImage,
} from "../../styles/teamMember";
import { TeamMemberType } from "../../types/types";

export default function TeamMember({
  teamMember,
  matches,
}: {
  teamMember: TeamMemberType;
  matches: boolean;
}) {
  const { name, title, picture } = teamMember;
  return (
    <Teammember>
      <TeammemberImage src={picture} />
      <TeammemberDescription>{name}</TeammemberDescription>
      <TeammemberDescription
        sx={{
          textDecoration: "underline",
        }}
      >
        {title}
      </TeammemberDescription>
    </Teammember>
  );
}
