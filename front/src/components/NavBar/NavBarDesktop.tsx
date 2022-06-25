import { MouseEvent } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import { Menu, MenuItem, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-scroll";
import {
  MyList,
  MyListItem,
  NavBarContainer,
  NavBarHeader,
} from "../../styles/navbar";
import NavBarDesktopItem from "./NavBarDesktopItem";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export default function NavBarDesktop() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { t } = useTranslation();

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <NavBarContainer id="navbar">
      <NavBarHeader>Werk</NavBarHeader>
      <MyList type="row">
        <MyListItem>
          <NavBarDesktopItem>
            <Link to="about" offset={-100}>
              {t("About")}
            </Link>
          </NavBarDesktopItem>
        </MyListItem>
        <MyListItem>
          <NavBarDesktopItem>
            <Link to="mission" offset={-100}>
              {t("Mission")}
            </Link>
          </NavBarDesktopItem>
        </MyListItem>
        <MyListItem>
          <NavBarDesktopItem>
            <Link to="values" offset={-180}>
              {t("Values")}
            </Link>
          </NavBarDesktopItem>
        </MyListItem>
        <MyListItem>
          <NavBarDesktopItem>
            <Link to="team" offset={-100}>
              {t("Team")}
            </Link>
          </NavBarDesktopItem>
        </MyListItem>
        <MyListItem>
          <NavBarDesktopItem>
            <Link to="jobs" offset={-100}>
              {t("Jobs")}
            </Link>
          </NavBarDesktopItem>
        </MyListItem>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            color: "inherit",
          }}
          disableRipple={true}
        >
          <LanguageIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <MenuItem
            sx={{
              width: "64px",
              display: "flex",
              justifyContent: "center",
            }}
            disableRipple={true}
            onClick={() => {
              handleClose();
              i18next.changeLanguage("en");
            }}
          >
            EN
          </MenuItem>
          <MenuItem
            sx={{
              width: "64px",
              display: "flex",
              justifyContent: "center",
            }}
            disableRipple={true}
            onClick={() => {
              handleClose();
              i18next.changeLanguage("fr");
            }}
          >
            FR
          </MenuItem>
        </Menu>
      </MyList>
    </NavBarContainer>
  );
}
