import { useContext, useEffect, useRef, useState } from "react";
import {
  Drawer,
  Divider,
  ListItemButton,
  Menu,
  MenuItem,
  Button,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import { myContext } from "../../context/MyProvider";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/system";
import NavDrawerItem from "./NavDrawerItem";
import i18next from "i18next";

export default function NavDrawer() {
  const { navToggled, setNavToggled } = useContext(myContext);
  const drawerRef = useRef<any>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { t } = useTranslation();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Drawer
      open={navToggled}
      ref={drawerRef}
      disableScrollLock={true}
      sx={{
        zIndex: 100,
      }}
    >
      <CloseIcon
        sx={{
          position: "absolute",
          right: "20px",
          top: "20px",
          ":hover": {
            cursor: "pointer",
          },
          zIndex: 999,
        }}
        onClick={() => {
          setNavToggled(false);
        }}
      />
      <Container
        sx={{
          marginTop: "4em",
        }}
      >
        <ListItemButton>
          <NavDrawerItem>
            <Link to="about">{t("About")}</Link>
          </NavDrawerItem>
        </ListItemButton>
        <Divider variant="middle" />
        <ListItemButton>
          <NavDrawerItem>
            <Link to="mission">{t("Mission")}</Link>
          </NavDrawerItem>
        </ListItemButton>
        <Divider variant="middle" />
        <ListItemButton>
          <NavDrawerItem>
            <Link to="values">{t("Values")}</Link>
          </NavDrawerItem>
        </ListItemButton>
        <Divider variant="middle" />
        <ListItemButton>
          <NavDrawerItem>
            <Link to="team">{t("Team")}</Link>
          </NavDrawerItem>
        </ListItemButton>
        <Divider variant="middle" />
        <ListItemButton>
          <NavDrawerItem>
            <Link to="jobs">{t("Jobs")}</Link>
          </NavDrawerItem>
        </ListItemButton>
        <Divider variant="middle" />
        <Grid
          sx={{
            marginTop: "8px",
            display: "flex",
            justifyContent: "center",
          }}
        >
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
        </Grid>
      </Container>
    </Drawer>
  );
}
