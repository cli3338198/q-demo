import { useContext, useEffect } from "react";
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
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./locales/en";
import { fr } from "./locales/fr";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    fr: {
      translation: fr,
    },
  },
  lng: document.querySelector("html")?.lang,
  fallbackLng: "en",
  cache: ["cookie"],
});

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { setNavToggled } = useContext(myContext);

  // clear local storage when app closed
  useEffect(() => {
    return () => {
      localStorage.clear();
    };
  }, []);

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
          paddingLeft: "10%",
        }}
      >
        <NavBar />
        <About />
        <Mission />
        <Values />
        <Team />
        <Jobs />
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
