import { ListItemText } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import {
  MyList,
  MyListItemText,
  NavBarContainer,
  NavBarHeader,
} from "../../styles/navbar";

export default function NavBarDesktop({ matches }: { matches: boolean }) {
  return (
    <NavBarContainer>
      <NavBarHeader>Werk</NavBarHeader>
      <MyList type="row">
        <MyListItemText primary="About" />
        <MyListItemText primary="Mission" />
        <MyListItemText primary="Values" />
        <MyListItemText primary="Team" />
        <MyListItemText primary="Jobs" />
        <LanguageIcon
          sx={{
            ":hover": {
              borderBottom: "1px solid black",
              cursor: "pointer",
            },
          }}
        />
      </MyList>
    </NavBarContainer>
  );
}
