import { useContext } from "react";
import { myContext } from "../../context/MyProvider";
import { JobItem } from "../../styles/jobs";
import { JobsType } from "../../types/types";

export default function JobsItem({
  job,
  filter,
}: {
  job: JobsType;
  filter: string;
}) {
  const { setJobDrawerToggled, setSelectedJob } = useContext(myContext);
  const { title } = job;

  return (
    <JobItem
      onClick={() => {
        if (!title.toLowerCase().includes(filter)) return;
        setJobDrawerToggled(true);
        setSelectedJob(job);
      }}
      sx={{
        textDecoration: `${
          !title.toLowerCase().includes(filter) ? "line-through" : "none"
        }`,
        opacity: `${!title.toLowerCase().includes(filter) ? "30%" : "100%"}`,
      }}
    >
      {title}
    </JobItem>
  );
}
