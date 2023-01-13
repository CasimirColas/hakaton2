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
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UserInfo from "./userInfo";
import updateUser from "../../dynamodb/functionUser/update";
interface User {
  email: string;
}
export default function UserInfoEdit(props: User) {
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
  const [firstname, setfirstName] = React.useState("");
  const [error, setError] = React.useState(false);
  function handlefirstName(value: string) {
    if (
      /^[a-zA-Zéèàùûêâôë]{1}[a-zA-Zéèàùûêâôë-]*[a-zA-Zéèàùûêâôë]$/.test(
        value
      ) ||
      value === ""
    ) {
      setfirstName(value);
      setError(false);
    } else {
      setError(true);
      setfirstName("");
    }
  }
  const [lastname, setLastName] = React.useState("");
  const [error7, setError7] = React.useState(false);
  function handleLastName(value: string) {
    if (
      /^[a-zA-Zéèàùûêâôë]{1}[a-zA-Zéèàùûêâôë-\s]*[a-zA-Zéèàùûêâôë]$/.test(
        value
      ) ||
      value === ""
    ) {
      setLastName(value);
      setError7(false);
    } else {
      setError7(true);
      setLastName("");
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
  interface User {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
    adress: string;
    city: string;
  }
  const infoToSend: User = {
    firstname: firstname,
    lastname: lastname,
    email: props.email,
    phone: number,
    password: password,
    adress: adress,
    city: city,
  };
  function EditProfile(email: string, obj: User) {
    updateUser(email, obj);
  }
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
      <UserInfo />
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
              label="Firstname"
              helperText={error ? "Only letters and -" : ""}
              sx={{ bgcolor: "white", m: "1rem", width: "60vw" }}
              onChange={(e) => handlefirstName(e.target.value)}
            />
            <TextField
              color="secondary"
              size="small"
              id="Lastname"
              label="Lastname"
              helperText={error7 ? "Only letters and -" : ""}
              sx={{ bgcolor: "white", m: "1rem", width: "60vw" }}
              onChange={(e) => handleLastName(e.target.value)}
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
            onClick={() => EditProfile(props.email, infoToSend)}
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
