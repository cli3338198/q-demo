import { Grid, TextField } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { myContext } from "../../context/MyProvider";
import {
  JobsContainer,
  JobsContent,
  JobsImage,
  JobsHeader,
  JobsDescription,
  JobsSubtitle,
} from "../../styles/jobs";
import { JobsType } from "../../types/types";
import JobsItem from "./JobsItem";

export default function Jobs() {
  const [jobs, setJobs] = useState<JobsType[]>([]);
  const { filter, setFilter } = useContext(myContext);
  const { t } = useTranslation();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data } = await axios.get<JobsType[]>(
          "http://localhost:5050/jobs"
        );
        if (!cancelled) {
          setJobs(data);
        }
      } catch (err) {}
    })();
    return () => {
      cancelled = true;
    };
  }, [setJobs]);

  const renderJobs = jobs.map((job, idx) => (
    <Grid
      item
      key={idx}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      <JobsItem job={job} filter={filter} />
    </Grid>
  ));

  return (
    <JobsContainer id={"jobs"}>
      {/* left side */}
      <JobsContent>
        <JobsHeader>{t("Jobs")}</JobsHeader>
        <JobsDescription>
          {t(
            "Come Work With Us. Our staff is diverse and from all over the world, united by a shared passion for purpose-driven, meaningful work."
          )}
        </JobsDescription>
        <JobsSubtitle>
          {t(
            "Can you put it on my calendar? organic growth all hands on deck. Forcing function. Get all your ducks in a row pig in a python. Can you ballpark the cost per unit for me hop on the bandwagon so innovation is hot right now put in in a deck for our standup today weaponize the data but nail it down. Those options are already baked in with this model. Viral engagement. What are the expectations."
          )}
        </JobsSubtitle>
        <JobsSubtitle>
          {t(
            "Can you put it on my calendar? organic growth all hands on deck. Forcing function. Get all your ducks in a row pig in a python. Can you ballpark the cost per unit for me hop on the bandwagon so innovation is hot right now put in in a deck for our standup today weaponize the data but nail it down. Those options are already baked in with this model. Viral engagement. What are the expectations."
          )}
        </JobsSubtitle>

        {/* jobs list */}
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1em",
          }}
        >
          <TextField
            placeholder={t("Search Jobs")}
            variant="standard"
            sx={{
              paddingBottom: "2rem",
              input: {
                textAlign: "center",
              },
            }}
            onChange={(e) => setFilter(e.target.value)}
          />
          <Grid container spacing={4} justifyContent={"center"}>
            {renderJobs}
          </Grid>
        </Container>
      </JobsContent>
      {/* right side */}
      <JobsImage src="/assets/hands2.jpg" />
    </JobsContainer>
  );
}
