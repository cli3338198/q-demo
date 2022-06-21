import { useContext } from "react";
import { myContext } from "../../context/MyProvider";
import { JobItem } from "../../styles/jobs";
import { JobsType } from "../../types/types";

export default function JobsItem({ job }: { job: JobsType }) {
  const { setJobDrawerToggled } = useContext(myContext);

  return (
    <JobItem onClick={() => setJobDrawerToggled(true)}>{job.title}</JobItem>
  );
}
