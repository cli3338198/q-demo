import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import { Button, Container } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Jobs from "./components/Jobs/Jobs";
import Mission from "./components/Mission/Mission";
import Team from "./components/Team/Team";
import Values from "./components/Values/Values";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
