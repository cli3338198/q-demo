import { useContext, useRef } from "react";
import { Drawer } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { myContext } from "../../context/MyProvider";
import JobForm from "../JobForm/JobForm";

export default function JobDrawer() {
  const { jobDrawerToggled, setSelectedJob } = useContext(myContext);
  const jobDrawerRef = useRef<any>();
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Drawer
      ref={jobDrawerRef}
      open={jobDrawerToggled}
      hideBackdrop={false}
      disableScrollLock={true}
      onClose={() => () => {
        setTimeout(
          () => {
            setSelectedJob(null);
          },
          smallScreen ? 400 : 500
        );
      }}
      transitionDuration={smallScreen ? 400 : 500}
      PaperProps={{
        sx: {
          width: `${smallScreen ? "100%" : mediumScreen ? "60%" : "40%"}`,
          zIndex: 100,
        },
      }}
      sx={{
        zIndex: 1000,
      }}
    >
      <JobForm />
    </Drawer>
  );
}
