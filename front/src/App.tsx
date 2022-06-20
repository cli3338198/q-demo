import React from "react";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import { Container } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Mission from "./components/Mission/Mission";
import Team from "./components/Team/Team";
import Values from "./components/Values/Values";
import NavDrawer from "./components/NavDrawer/NavDrawer";
import Jobs from "./components/Jobs/Jobs";
import MyProvider from "./context/MyProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <MyProvider>
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
          {/* Drawer */}
          <NavDrawer />
        </MyProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
