import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const ValueContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  background: "rgba(207,211,222,255)",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "30px",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  [theme.breakpoints.down("md")]: {
    marginTop: "40px",
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "100px",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const ValueHeader = styled(Typography)(({ theme }) => ({
  marginTop: "20px",
  lineHeight: 1.5,
  fontSize: "72px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));

export const ValueContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  maxWidth: "100%",
  padding: "0 30px 0 30px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const Value = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "20%",
  alignItems: "center",
  flexDirection: "column",
  margin: "1em",
  [theme.breakpoints.down("md")]: {
    width: "60%",
    position: "relative",
  },
  [theme.breakpoints.down("sm")]: {
    width: "60%",
    position: "relative",
  },
}));

export const ValueTitle = styled(Typography)(({ theme }) => ({
  display: "flex",
  textAlign: "center",
  lineHeight: 1.5,
  fontSize: "32px",
  marginbottom: "20px",
  [theme.breakpoints.down("sm")]: {
    padding: 0,
    fontSize: "28px",
  },
}));

export const ValueImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "80%",
  padding: "10px",
  borderRadius: "50%",
  [theme.breakpoints.down("md")]: {
    width: "80%",
    padding: "24px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "24px",
  },
}));

export const ValueDescription = styled(Typography)(({ theme }) => ({
  display: "flex",
  textAlign: "center",
  lineHeight: 1.15,
  letterSpacing: 0.3,
  marginBottom: "1em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

export const ValueParagraph = styled(Typography)(({ theme }) => ({
  lineHeight: 1.15,
  letterSpacing: 0.8,
  marginBottom: "2em",
  fontSize: "14px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));
