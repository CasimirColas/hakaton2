import React from "react";
import {
  Typography,
  Button,
  Box,
  FormControl,
  TextField,
  NativeSelect,
} from "@mui/material";

export default function AddAVehicle() {
  const [model, setModel] = React.useState("");
  const [error, setError] = React.useState(false);
  function handleModel(value: string) {
    if (
      /^[a-zA-Z0-9éèàùûêâôë]{1}[a-zA-Z0-9éèàùûêâôë'-\s]*[a-zA-Z0-9éèàùûêâôë]$/.test(
        value
      ) ||
      value === ""
    ) {
      setModel(value);
      setError(false);
    } else {
      setError(true);
      setModel("");
    }
  }
  const [brand, setBrand] = React.useState("");
  const [error1, setError1] = React.useState(false);
  function handleBrand(value: string) {
    if (
      /^[a-zA-Z0-9éèàùûêâôë]{1}[a-zA-Z0-9éèàùûêâôë\s]*[a-zA-Z0-9éèàùûêâôë]$/.test(
        value
      ) ||
      value === ""
    ) {
      setBrand(value);
      setError1(false);
    } else {
      setError1(true);
      setBrand("");
    }
  }
  const [gearBox, setGearBox] = React.useState("");
  function handleGearBox(value: string) {
    if (value != "") {
      setGearBox(value);
    }
  }
  const [energy, setEnergy] = React.useState("");
  function handleEnergy(value: string) {
    if (value != "") {
      setEnergy(value);
    }
  }
  return (
    <Box
      className="AddCart"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: "80vh",
        width: "95vw",
        bgcolor: "primary.main",
        border: "3px solid #D65A00",
        boxShadow: 24,
        borderRadius: "10px",
      }}
    >
      <Typography
        align="center"
        variant="h4"
        sx={{
          bgcolor: "secondary.main",
          color: "primary.main",
          p: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        ADD A NEW VEHICLE
      </Typography>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={(event) => event.preventDefault()}
      >
        <TextField
          color="secondary"
          size="small"
          id="model"
          label="Model"
          helperText={error ? "Only letters, numbers, space, - and ' " : ""}
          sx={{ bgcolor: "white", m: "1rem", width: "60vw" }}
          onChange={(e) => handleModel(e.target.value)}
        />
        <TextField
          color="secondary"
          size="small"
          id="brand"
          label="Brand"
          helperText={error1 ? "Only letters, space or numbers" : ""}
          sx={{ bgcolor: "white", m: "1rem", width: "60vw" }}
          onChange={(e) => handleBrand(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "1rem",
            width: "60vw",
          }}
        >
          <Typography sx={{ margin: "0 1rem" }}>GearBox</Typography>
          <NativeSelect
            sx={{ bgcolor: "white", width: "40vw" }}
            id="gearBox input"
            value={gearBox}
            onChange={(event: { target: { value: string } }) =>
              handleGearBox(event.target.value)
            }
          >
            <option aria-label="None" value="" />
            <option value={"M"}>Manual</option>
            <option value={"A"}>Automatic</option>
          </NativeSelect>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "1rem",
            width: "60vw",
          }}
        >
          <Typography sx={{ margin: "0 1rem" }}>Energy</Typography>
          <NativeSelect
            sx={{ bgcolor: "white", width: "40vw", marginLeft: "1rem" }}
            id="Energy input"
            value={energy}
            onChange={(event: { target: { value: string } }) =>
              handleEnergy(event.target.value)
            }
          >
            <option aria-label="None" value="" />
            <option value={"L"}>Lead Free</option>
            <option value={"D"}>Diesel</option>
            <option value={"E"}>Electri</option>
            <option value={"H"}>Hybrid</option>
          </NativeSelect>
        </div>
      </FormControl>
    </Box>
  );
}
