import { List, Typography, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const NavBarContainer = styled(Box)(() => ({
  position: "sticky",
  background: "white",
  top: "0",
  left: "0",
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  padding: "2px 8px",
  zIndex: 1000,
}));

export const NavBarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "4em",
}));

export const MyList = styled(List)(({ type }: { type?: "row" }) => ({
  display: type === "row" ? "flex" : "block",
  // flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
}));

export const MyListItem = styled(ListItem)(() => ({
  width: "auto",
  marginRight: "2em",
  ":hover": {
    borderBottom: "1px solid black",
    cursor: "pointer",
  },
}));
