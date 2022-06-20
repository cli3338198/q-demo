import { ListItemText, ListItemButton } from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";
import {
  MyList,
  MyListItem,
  NavBarContainer,
  NavBarHeader,
} from "../../styles/navbar";
import NavBarDesktopItem from "./NavBarDesktopItem";

export default function NavBarDesktop({ matches }: { matches: boolean }) {
  return (
    <NavBarContainer>
      <NavBarHeader>Werk</NavBarHeader>
      <MyList type="row">
        <MyListItem>
          <NavBarDesktopItem>
            <a href="#about">About</a>
          </NavBarDesktopItem>
        </MyListItem>
        <MyListItem>
          <NavBarDesktopItem>
            <a href="#mission">Mission</a>
          </NavBarDesktopItem>
        </MyListItem>
        <MyListItem>
          <NavBarDesktopItem>
            <a href="#values">Values</a>
          </NavBarDesktopItem>
        </MyListItem>
        <MyListItem>
          <NavBarDesktopItem>
            <a href="#team">Team</a>
          </NavBarDesktopItem>
        </MyListItem>
        <MyListItem>
          <NavBarDesktopItem>
            <a href="#jobs">Jobs</a>
          </NavBarDesktopItem>
        </MyListItem>
        <LanguageIcon />
      </MyList>
    </NavBarContainer>
  );
}
