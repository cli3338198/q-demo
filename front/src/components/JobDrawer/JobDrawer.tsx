import { Drawer } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import { myContext } from "../../context/MyProvider";

export default function JobDrawer() {
  const { jobDrawerToggled, setJobDrawerToggled } = useContext(myContext);
  const jobDrawerRef = useRef<any>();

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (
        jobDrawerToggled &&
        jobDrawerRef.current &&
        jobDrawerRef.current !== e.target
      ) {
        setJobDrawerToggled(false);
      }
    }
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [jobDrawerToggled, setJobDrawerToggled]);

  return (
    <Drawer
      ref={jobDrawerRef}
      open={jobDrawerToggled}
      anchor="right"
      hideBackdrop={false}
      disableScrollLock={true}
      sx={{
        zIndex: 1000,
      }}
    ></Drawer>
  );
}
