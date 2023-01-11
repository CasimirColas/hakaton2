import React from "react";
import {
  Typography,
  Box,
  Button,
  Drawer,
  FormControl,
  TextField,
} from "@mui/material";
import "@fontsource/righteous";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

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
  function handleCompanyName(e: event) {
    if (
      /^[a-zA-Z0-9éèàùûêâôë]{1}[a-zA-Z0-9éèàùûêâôë'-\s]*[a-zA-Z0-9éèàùûêâôë]$/.test(
        e.target.value
      ) ||
      e.target.value === ""
    ) {
      setCompanyName(e.target.value);
      setError(false);
    } else {
      setError(true);
      setCompanyName("");
    }
  }
  const [email, setEmail] = React.useState("");
  const [error1, setError1] = React.useState(false);
  function handleEmail(e: event) {
    if (
      /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(e.target.value) ||
      e.target.value === ""
    ) {
      setEmail(e.target.value);
      setError1(false);
    } else {
      setError1(true);
      setEmail("");
    }
  }
  const [number, setNumber] = React.useState("");
  const [error2, setError2] = React.useState(false);
  function handleNumber(e: event) {
    if (
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/.test(
        e.target.value
      ) ||
      e.target.value === ""
    ) {
      setNumber(e.target.value);
      setError2(false);
    } else {
      setError2(true);
      setNumber("");
    }
  }
  const [password, setPassword] = React.useState("");
  const [error0, setError0] = React.useState(false);
  function handlePassword(e: event) {
    if (
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/.test(e.target.value) ||
      e.target.value === ""
    ) {
      setPassword(e.target.value);
      setError0(false);
    } else {
      setError0(true);
      setPassword("");
    }
  }
  const [adress, setAdress] = React.useState("");
  const [error4, setError4] = React.useState(false);
  function handleAdress(e: event) {
    if (
      /^[a-zA-Z0-9éèàùûêâôë]{1}[a-zA-Z0-9éèàùûêâôë'-\s]*[a-zA-Z0-9éèàùûêâôë]$/.test(
        e.target.value
      ) ||
      e.target.value === ""
    ) {
      setAdress(e.target.value);
      setError4(false);
    } else {
      setError4(true);
      setAdress("");
    }
  }
  const [city, setCity] = React.useState("");
  const [error5, setError5] = React.useState(false);
  function handleCity(e: event) {
    if (
      /^[a-zA-Zéèàùûêâôë]{1}[a-zA-Zéèàùûêâôë'-\s]*[a-zA-Zéèàùûêâôë]$/.test(
        e.target.value
      ) ||
      e.target.value === ""
    ) {
      setCity(e.target.value);
      setError5(false);
    } else {
      setError5(true);
      setCity("");
    }
  }
  const list = () => (
    <Box
      sx={{
        p: "1rem",
        width: "80vw",
        display: "flex",
        flexDirection: "column",
        bgcolor: "primary.main",
      }}
      role="menu"
    >
      <Typography variant="h3" sx={{ borderBottom: "2px solid #33363F" }}>
        Edit yours informations :
      </Typography>
      <FormControl onSubmit={(event) => event.preventDefault()}>
        <TextField
          color="secondary"
          size="small"
          id="Name"
          label="Company Name"
          helperText={error ? "Only letters and numbers" : ""}
          sx={{ bgcolor: "white", m: "1rem", width: "60vw" }}
          onChange={(e) => handleCompanyName(e)}
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
          onChange={(e) => handleEmail(e)}
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
          onChange={(e) => handlePassword(e)}
        />
        <TextField
          color="secondary"
          size="small"
          id="Phone"
          label="Phone Number"
          helperText={error2 ? "Only numbers and 10 numbers needed" : ""}
          sx={{ bgcolor: "white", m: "1rem", width: "60vw" }}
          onChange={(e) => handleNumber(e)}
        />
        <TextField
          color="secondary"
          size="small"
          id="City"
          label="Adress"
          helperText={error4 ? "Enter a valid adress" : ""}
          sx={{ bgcolor: "white", m: "1rem", width: "60vw" }}
          onChange={(e) => handleAdress(e)}
        />
        <TextField
          color="secondary"
          size="small"
          id="City"
          label="City"
          helperText={error5 ? "Only letters, spaces, ' or -" : ""}
          sx={{ bgcolor: "white", m: "1rem", width: "60vw" }}
          onChange={(e) => handleCity(e)}
        />
      </FormControl>
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
