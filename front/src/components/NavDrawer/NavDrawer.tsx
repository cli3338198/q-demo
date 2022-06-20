import { useContext, useEffect, useRef } from "react";
import { Drawer, Divider, ListItemButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { myContext } from "../../context/MyProvider";
import NavDrawerItem from "./NavDrawerItem";

export default function NavDrawer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { navToggled, setNavToggled } = useContext(myContext);
  const drawerRef = useRef<any>();

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (navToggled && drawerRef.current && drawerRef.current !== e.target) {
        setNavToggled(false);
      }
    }
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [matches, navToggled, setNavToggled, drawerRef]);

  return (
    <Drawer open={navToggled} ref={drawerRef}>
      <ListItemButton>
        <NavDrawerItem>
          <a href="#about">About</a>
        </NavDrawerItem>
      </ListItemButton>
      <Divider variant="middle" />
      <ListItemButton>
        <NavDrawerItem>
          <a href="#mission">Mission</a>
        </NavDrawerItem>
      </ListItemButton>
      <Divider variant="middle" />
      <ListItemButton>
        <NavDrawerItem>
          <a href="#values">Values</a>
        </NavDrawerItem>
      </ListItemButton>
      <Divider variant="middle" />
      <ListItemButton>
        <NavDrawerItem>
          <a href="#team">Team</a>
        </NavDrawerItem>
      </ListItemButton>
      <Divider variant="middle" />
      <ListItemButton>
        <NavDrawerItem>
          <a href="#jobs">Jobs</a>
        </NavDrawerItem>
      </ListItemButton>
    </Drawer>
  );
}
