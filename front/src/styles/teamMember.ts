import { Box, styled } from "@mui/system";
import { Typography } from "@mui/material";

export const TeammemberHeader = styled(Typography)(({ theme }) => ({
  marginTop: "20px",
  lineHeight: 1.5,
  fontSize: "72px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));

export const Teammember = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "80%",
  [theme.breakpoints.down("md")]: {
    position: "relative",
    width: "100%",
  },
}));

export const TeammemberImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  borderRadius: "50%",
  [theme.breakpoints.down("md")]: {
    width: "80%",
    padding: "24px",
  },
}));

export const TeammemberDescription = styled(Typography)(({ theme }) => ({
  display: "flex",
  textAlign: "center",
  lineHeight: 1.3,
  fontSize: "0.7rem",
  marginbottom: "20px",
}));

//

export const TeamContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexBasis: 1,
  width: "100%",
  height: "100%",
  marginTop: "60px",
  marginBottom: "60px",
  [theme.breakpoints.down("md")]: {
    display: "grid",
    marginTop: "30px",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "100px",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const TeamContent = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "0 30px 0 30px",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    alignItems: "center",
  },
}));

export const TeammemberContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    display: "grid",
    gritTemplateColumns: "1fr 1fr",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));
