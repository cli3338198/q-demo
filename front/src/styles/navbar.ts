import { List, Typography, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const NavBarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItem: "center",
  padding: "2px 8px",
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

export const MyListItemText = styled(ListItemText)(() => ({
  width: "auto",
  marginRight: "4em",
  ":hover": {
    borderBottom: "1px solid black",
    cursor: "pointer",
  },
}));
