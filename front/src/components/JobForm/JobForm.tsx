import {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { myContext } from "../../context/MyProvider";
import {
  JobContainer,
  JobLogo,
  JobSubtitle,
  JobTitle,
  MyTextField,
} from "../../styles/jobform";
import { FormStateType } from "../../types/types";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function JobForm() {
  const { selectedJob, setJobDrawerToggled } = useContext(myContext);
  const [formState, setFormState] = useState<FormStateType>(() => {
    const id = selectedJob?.id;
    const savedFormState = localStorage.getItem(id!);
    if (savedFormState) {
      return JSON.parse(savedFormState);
    } else {
      return {
        fullname: "",
        email: "",
        linkedin: "",
      };
    }
  });
  const [isInvalidLinkedin, setIsInvalidLinkedin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { t } = useTranslation();

  const { fullname, email, linkedin } = formState;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      setIsInvalidLinkedin(false);
      setIsLoading(true);
      await axios.post(
        `http://localhost:5050/job/${selectedJob?.id}`,
        formState
      );
      setIsSuccess(true);
      setIsInvalidLinkedin(false);
      localStorage.removeItem(selectedJob?.id!);
    } catch (err) {
      setIsInvalidLinkedin(true);
    } finally {
      setIsLoading(false);
    }
  }

  // to get current form state
  // set localstorage after form change
  // alternative to callback in classes/setState

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setIsInvalidLinkedin(false);
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  useEffect(() => {
    localStorage.setItem(selectedJob?.id!, JSON.stringify(formState));
  }, [selectedJob, formState]);

  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        margin: "1rem",
      }}
    >
      <CloseIcon
        sx={{
          position: "absolute",
          right: "20px",
          top: "20px",
          ":hover": {
            cursor: "pointer",
          },
        }}
        onClick={() => {
          setJobDrawerToggled(false);
        }}
      />
      <JobLogo>Werk</JobLogo>
      <JobTitle>{selectedJob?.title}</JobTitle>
      <Divider
        variant="middle"
        sx={{
          marginBottom: "1em",
        }}
      />
      <JobSubtitle
        sx={{
          fontWeight: "lighter",
        }}
      >
        Denver, CO ({t("Remote")})
      </JobSubtitle>
      <JobSubtitle
        sx={{
          marginBottom: "0.5em",
        }}
      >
        <strong>{t("About")} Werk:</strong>
      </JobSubtitle>
      <JobSubtitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eos
        cupiditate! Exercitationem numquam dolorum quod temporibus magni!
        Perferendis placeat saepe inventore fuga. Eligendi, magni dolorum porro
        nobis unde neque deleniti.
      </JobSubtitle>
      <JobSubtitle
        sx={{
          marginBottom: "0.5em",
        }}
      >
        <strong>{t("The Role")}:</strong>
      </JobSubtitle>
      <JobSubtitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        deleniti natus vitae assumenda maxime iure, ad unde perferendis
        repellendus, dolorem mollitia maiores quaerat, velit incidunt
        reprehenderit provident quae. Ullam, voluptatibus.
      </JobSubtitle>
      <Divider
        variant="middle"
        sx={{
          marginBottom: "1em",
        }}
      />
      <JobContainer>
        <form onSubmit={handleSubmit}>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <MyTextField
              label={t("Full Name")}
              variant="standard"
              required
              name="fullname"
              value={fullname}
              onChange={handleChange}
              disabled={isSuccess}
            />
            <MyTextField
              label={t("Email")}
              variant="standard"
              type="email"
              required
              name="email"
              value={email}
              onChange={handleChange}
              disabled={isSuccess}
            />
            <MyTextField
              label={
                isInvalidLinkedin ? `${t("Invalid")} LinkedIn` : "LinkedIn"
              }
              variant="standard"
              required
              name="linkedin"
              value={linkedin}
              onChange={handleChange}
              color={isInvalidLinkedin ? "error" : "primary"}
              autoFocus={isInvalidLinkedin}
              error={isInvalidLinkedin}
              sx={{
                color: isInvalidLinkedin ? "red" : "inherit",
              }}
              disabled={isSuccess}
            />
            <Button
              color={
                isInvalidLinkedin ? "error" : isSuccess ? "success" : "inherit"
              }
              type="submit"
              disabled={isSuccess}
              disableRipple={true}
            >
              {isLoading
                ? "Submitting..."
                : isSuccess
                ? t("SUCCESS")
                : t("APPLY TO THIS JOB")}
            </Button>
          </Grid>
        </form>
      </JobContainer>
    </Box>
  );
}
