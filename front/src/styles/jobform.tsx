import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const JobContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
}));

export const JobLogo = styled(Typography)(({ theme }) => ({
  // padding: "4px",
  flexGrow: 1,
  fontSize: "4em",
  [theme.breakpoints.down("md")]: {
    fontSize: "3.5em",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5em",
  },
}));

export const JobSubtitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  lineHeight: 1,
  letterSpacing: 0.3,
  marginBottom: "1em",
  fontSize: "0.9rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
}));

export const JobTitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  lineHeight: 1,
  fontSize: "1.4em",
  marginBottom: "0.3em",
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

export const JobApplicationContainer = styled(Box)(() => ({
  background: "#FAFAFA",
  display: "flex",
  flexDirection: "column",
}));

export const MyTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginBottom: "1em",
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
