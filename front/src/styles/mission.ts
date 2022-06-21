import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MissionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  height: "80vh",
  padding: "0px 0px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "20px",
    marginTop: "100px",
    height: "100vh",
  },
}));

export const MissionTitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  lineHeight: 1.5,
  fontSize: "72px",
  marginbottom: "20px",
  padding: "20px",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: 0,
    fontSize: "42px",
    lineHeight: 1,
  },
}));

export const MissionContent = styled(Box)(({ theme }) => ({
  display: "flex",
  maxWidth: "80%",
  padding: "30px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 0,
  },
}));

export const MissionDescription = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "2em",
  padding: "1em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));
