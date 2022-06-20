import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AboutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  [theme.breakpoints.up("lg")]: {
    paddingTop: "5%",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const AboutContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "80%",
  padding: "30px",
}));

export const AboutTitle = styled(Typography)(({ theme }) => ({
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

export const AboutDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

export const AboutImage = styled("img")(({ src, theme }) => ({
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
