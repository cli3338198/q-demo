import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { NavBarContainer, NavBarHeader } from "../../styles/navbar";

export default function NavBarMobile({ matches }: { matches: boolean }) {
  return (
    <NavBarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <NavBarHeader textAlign={"center"}>Werk</NavBarHeader>
    </NavBarContainer>
  );
}
