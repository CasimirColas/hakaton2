import React from "react";
import {
  Typography,
  Box,
  Button,
  Drawer,
  FormControl,
  TextField,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import "@fontsource/righteous";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CompanyInfo from "./companyInfo";

export default function CompanyInfoEdit() {
  const stylePaper: object = {
    sx: { bgcolor: "primary.main", borderRadius: "20px 0 0 20px" },
  };
  type Anchor = "right";
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  const [companyName, setCompanyName] = React.useState("");
  const [error, setError] = React.useState(false);
  function handleCompanyName(value: string) {
    if (
      /^[a-zA-Z0-9éèàùûêâôë]{1}[a-zA-Z0-9éèàùûêâôë'-\s]*[a-zA-Z0-9éèàùûêâôë]$/.test(
        value
      ) ||
      value === ""
    ) {
      setCompanyName(value);
      setError(false);
    } else {
      setError(true);
      setCompanyName("");
    }
  }
  const [email, setEmail] = React.useState("");
  const [error1, setError1] = React.useState(false);
  function handleEmail(value: string) {
    if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(value) || value === "") {
      setEmail(value);
      setError1(false);
    } else {
      setError1(true);
      setEmail("");
    }
  }
  const [number, setNumber] = React.useState("");
  const [error2, setError2] = React.useState(false);
  function handleNumber(value: string) {
    if (
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/.test(value) ||
      value === ""
    ) {
      setNumber(value);
      setError2(false);
    } else {
      setError2(true);
      setNumber("");
    }
  }
  const [password, setPassword] = React.useState("");
  const [error0, setError0] = React.useState(false);
  function handlePassword(value: string) {
    if (
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/.test(value) ||
      value === ""
    ) {
      setPassword(value);
      setError0(false);
    } else {
      setError0(true);
      setPassword("");
    }
  }
  const [adress, setAdress] = React.useState("");
  const [error4, setError4] = React.useState(false);
  function handleAdress(value: string) {
    if (
      /^[a-zA-Z0-9éèàùûêâôë]{1}[a-zA-Z0-9éèàùûêâôë'-\s]*[a-zA-Z0-9éèàùûêâôë]$/.test(
        value
      ) ||
      value === ""
    ) {
      setAdress(value);
      setError4(false);
    } else {
      setError4(true);
      setAdress("");
    }
  }
  const [city, setCity] = React.useState("");
  const [error5, setError5] = React.useState(false);
  function handleCity(value: string) {
    if (
      /^[a-zA-Zéèàùûêâôë]{1}[a-zA-Zéèàùûêâôë'-\s]*[a-zA-Zéèàùûêâôë]$/.test(
        value
      ) ||
      value === ""
    ) {
      setCity(value);
      setError5(false);
    } else {
      setError5(true);
      setCity("");
    }
  }
  const [website, setWebsite] = React.useState("");
  const [error6, setError6] = React.useState(false);
  function handleWebsite(value: string) {
    if (
      /^(http(s):\/\/.)[-a-z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(
        value
      ) ||
      value === ""
    ) {
      setWebsite(value);
      setError6(false);
    } else {
      setError6(true);
      setWebsite("");
    }
  }

  const infoToSend: object = {
    companyName: companyName,
    email: email,
    phone: number,
    password: password,
    adress: adress,
    city: city,
    website: website,
  };

  const list = () => (
    <Box
      sx={{
        p: "1rem",
        width: "80vw",
        display: "flex",
        flexDirection: "column",
        bgcolor: "primary.main",
        alignItems: "center",
      }}
      role="menu"
    >
      <CompanyInfo />
      <Accordion
        sx={{
          bgcolor: "inherit",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            m: 0,
            borderBottom: "2px solid #33363F",
          }}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">Edit yours informations</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormControl onSubmit={(event) => event.preventDefault()}>
            <TextField
              color="secondary"
              size="small"
              id="Name"
              label="Company Name"
              helperText={error ? "Only letters and numbers" : ""}
              sx={{ bgcolor: "white", m: "1rem", width: "60vw" }}
              onChange={(e) => handleCompanyName(e.target.value)}
            />
            <TextField
              color="secondary"
              size="small"
              id="Email"
              label="Email"
              helperText={
                error1
                  ? "Enter a correct Email form like : example@example.com"
                  : ""
              }
              sx={{ bgcolor: "white", m: "1rem", width: "60vw" }}
              onChange={(e) => handleEmail(e.target.value)}
            />
            <TextField
              color="secondary"
              size="small"
              id="Password"
              type="password"
              label="Password"
              helperText={
                error0
                  ? "One majuscule, one special caracters. Min. 8 caracters"
                  : ""
              }
              sx={{ bgcolor: "white", m: "1rem", width: "60vw" }}
              onChange={(e) => handlePassword(e.target.value)}
            />
            <TextField
              color="secondary"
              size="small"
              id="Phone"
              label="Phone Number"
              helperText={error2 ? "Only numbers and 10 numbers needed" : ""}
              sx={{ bgcolor: "white", m: "1rem", width: "60vw" }}
              onChange={(e) => handleNumber(e.target.value)}
            />
            <TextField
              color="secondary"
              size="small"
              id="adress"
              label="Adress"
              helperText={error4 ? "Enter a valid adress" : ""}
              sx={{ bgcolor: "white", m: "1rem", width: "60vw" }}
              onChange={(e) => handleAdress(e.target.value)}
            />
            <TextField
              color="secondary"
              size="small"
              id="city"
              label="City"
              helperText={error5 ? "Only letters, spaces, ' or -" : ""}
              sx={{ bgcolor: "white", m: "1rem", width: "60vw" }}
              onChange={(e) => handleCity(e.target.value)}
            />
            <TextField
              color="secondary"
              size="small"
              id="Website"
              label="Website"
              helperText={
                error6 ? "Enter a valid format like : www.example-12.com" : ""
              }
              sx={{ bgcolor: "white", m: "1rem", width: "60vw" }}
              onChange={(e) => handleWebsite(e.target.value)}
            />
          </FormControl>
          <Button
            sx={{
              width: "30vw",
              height: "3rem",
              bgcolor: "secondary.main",
              display: "flex",
              alignItems: "center",
            }}
            variant="text"
          >
            <Typography sx={{ m: ".5rem" }}>Send</Typography>
            <SendIcon />
          </Button>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  return (
    <div
      className="EditDrawer"
      style={{ width: "100vw", display: "flex", justifyContent: "flex-end" }}
    >
      <React.Fragment key="right">
        <Button
          onClick={toggleDrawer("right", true)}
          sx={{
            m: "0.5rem",
            color: "text.primary",
            display: "flex",
          }}
        >
          <SettingsOutlinedIcon fontSize="large" />
        </Button>
        <Drawer
          PaperProps={stylePaper}
          anchor="right"
          open={state.right}
          onClose={toggleDrawer("right", false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
