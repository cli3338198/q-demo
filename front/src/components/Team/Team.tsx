import { Container, Grid, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { TeamMemberType } from "../../types/types";
import { useTheme } from "@mui/material/styles";
import TeamMember from "./TeamMember";
import { TeammemberHeader } from "../../styles/teamMember";

export default function TeamMembers() {
  const [team, setTeam] = useState<
    { id: string; name: string; title: string; picture: string }[]
  >([]);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data } = await axios.get<TeamMemberType[]>(
          "http://localhost:5050/team_members"
        );
        if (!cancelled) setTeam(data);
      } catch (err) {
        console.log(err);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const renderTeam = team.map((teamMember) => (
    <Grid
      item
      key={teamMember.id}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      <TeamMember teamMember={teamMember} matches={matches} />
    </Grid>
  ));

  if (!team.length) return <></>;

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "10%",
      }}
    >
      <TeammemberHeader id="team">The Team</TeammemberHeader>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        sx={{ margin: "10px 4px 10px 4px" }}
      >
        {renderTeam}
      </Grid>
    </Container>
  );
}
