import React, { useContext } from "react";
import "./App.css";
import { useTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import { Container, IconButton, useMediaQuery } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Mission from "./components/Mission/Mission";
import Team from "./components/Team/Team";
import Values from "./components/Values/Values";
import NavDrawer from "./components/NavDrawer/NavDrawer";
import Jobs from "./components/Jobs/Jobs";
import MyProvider, { myContext } from "./context/MyProvider";
import JobDrawer from "./components/JobDrawer/JobDrawer";
import Footer from "./components/Footer/Footer";
import NavBarMobile from "./components/NavBar/NavBarMobile";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { setNavToggled } = useContext(myContext);

  return (
    <>
      {matches ? (
        <IconButton
          sx={{
            position: "sticky",
            left: "20px",
            top: "20px",
            zIndex: 100,
          }}
          onClick={() => {
            setNavToggled(true);
          }}
        >
          <MenuIcon />
        </IconButton>
      ) : null}
      {matches ? <NavBarMobile matches={matches} /> : null}
      <Container
        maxWidth="xl"
        sx={{
          paddingLeft: "5%",
        }}
      >
        {/* Navbar */}
        <NavBar />
        {/* About */}
        <About />
        {/* Mission */}
        <Mission />
        {/* Values */}
        <Values />
        {/* Team Members */}
        <Team />
        {/* Jobs */}
        <Jobs />
        {/* Drawer */}
        <NavDrawer />
        <JobDrawer />
        <Footer />
      </Container>
    </>
  );
}

export default function withTheme() {
  return (
    <MyProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MyProvider>
  );
}
