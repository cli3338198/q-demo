import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavBarContainer, NavBarHeader } from "../../styles/navbar";
import { useContext } from "react";
import { myContext } from "../../context/MyProvider";

export default function NavBarMobile({ matches }: { matches: boolean }) {
  const { setNavToggled } = useContext(myContext);

  return (
    <NavBarContainer>
      <IconButton
        sx={{
          position: "absolute",
          left: "1.5em",
          top: "1.5em",
        }}
        onClick={() => setNavToggled(true)}
      >
        <MenuIcon />
      </IconButton>
      <NavBarHeader textAlign={"center"}>Werk</NavBarHeader>
    </NavBarContainer>
  );
}
