import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const JobsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  marginTop: "120px",
  marginBottom: "60px",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "column-reverse",
  },
}));

export const JobsContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  padding: "30px",
}));

export const JobsHeader = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  lineHeight: 1.5,
  fontSize: "72px",
  [theme.breakpoints.down("md")]: {
    marginBottom: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "30px",
    lineHeight: 1,
    fontSize: "42px",
  },
}));

export const JobsDescription = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  lineHeight: 1.25,
  fontSize: "22px",
  letterSpacing: 4,
  marginBottom: "1em",
  fontStyle: "italic",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

export const JobsSubtitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  lineHeight: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

export const JobsImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "500px",
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "min(100%, 320px)",
    height: "min(100%, 300px)",
  },
}));

export const JobItem = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  lineHeight: 1.25,
  marginBottom: "1em",
  textDecoration: "underline",
  fontSize: "1.2rem",
  ":hover": {
    cursor: "pointer",
  },
}));
