import React from "react";
import {
  Typography,
  Button,
  Box,
  FormControl,
  TextField,
  NativeSelect,
} from "@mui/material";
import putNewCar from "../../dynamodb/functionCars/write";

interface Company {
  companyName: string;
}
export default function AddAVehicle(props: Company) {
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState(false);
  function handleName(value: string) {
    if (
      /^[a-zA-Z0-9éèàùûêâôë]{1}[a-zA-Z0-9éèàùûêâôë'-\s]*[a-zA-Z0-9éèàùûêâôë]$/.test(
        value
      ) ||
      value === ""
    ) {
      setName(value);
      setError(false);
    } else {
      setError(true);
      setName("");
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
  const [type, setType] = React.useState("");
  function handleType(value: string) {
    if (value != "") {
      setType(value);
    }
  }
  const [price, setPrice] = React.useState("");
  const [error2, setError2] = React.useState(false);
  function handlePrice(value: string) {
    if (/^[0-9]{1}[0-9\s]*[0-9]$/.test(value) || value === "") {
      setPrice(value);
      setError2(false);
    } else {
      setError2(true);
      setPrice("");
    }
  }
  const [image, setImage] = React.useState("");
  const [error3, setError3] = React.useState(false);
  function handleImage(value: string) {
    if (
      /^(http(s):\/\/.)[-a-z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(
        value
      ) ||
      value === ""
    ) {
      setImage(value);
      setError3(false);
    } else {
      setError3(true);
      setImage("");
    }
  }
  interface NewCar {
    name: string;
    brand: string;
    companyName: string;
    type: string;
    gearbox: string;
    energy: string;
    cost: string;
    img: string;
    status: string;
  }
  const newCar: NewCar = {
    name: name,
    brand: brand,
    companyName: props.companyName,
    type: type,
    gearbox: gearBox,
    energy: energy,
    cost: `${price} $`,
    status: "D",
    img: image,
  };
  function createNewVehicle(obj: NewCar) {
    putNewCar(obj);
  }

  return (
    <Box
      sx={{
        height: "80vh",
        width: "95vw",
        bgcolor: "primary.main",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "3px solid #D65A00",
        boxShadow: 24,
        borderRadius: "10px",
      }}
    >
      <Typography
        id="modal-modal-title"
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
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "scroll",
        }}
        onSubmit={(event) => event.preventDefault()}
      >
        <TextField
          color="secondary"
          size="small"
          id="Name"
          label="Model"
          helperText={error ? "Only letters, numbers, space, - and ' " : ""}
          sx={{ bgcolor: "white", m: "1rem", width: "60vw" }}
          onChange={(e) => handleName(e.target.value)}
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
          <Typography sx={{ margin: "0 1rem" }}>Type</Typography>
          <NativeSelect
            sx={{ bgcolor: "white", width: "40vw", marginLeft: "1.5rem" }}
            id="Type input"
            value={type}
            onChange={(event: { target: { value: string } }) =>
              handleType(event.target.value)
            }
          >
            <option aria-label="None" value="" />
            <option value={"C"}>Classic</option>
            <option value={"U"}>Utility</option>
            <option value={"P"}>Prestige</option>
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
            sx={{
              bgcolor: "white",
              width: "40vw",
              marginLeft: "1rem",
            }}
            id="Energy input"
            value={energy}
            onChange={(event: { target: { value: string } }) =>
              handleEnergy(event.target.value)
            }
          >
            <option aria-label="None" value="" />
            <option value={"L"}>Lead Free</option>
            <option value={"D"}>Diesel</option>
            <option value={"E"}>Electric</option>
            <option value={"H"}>Hybrid</option>
          </NativeSelect>
        </div>
        <TextField
          color="secondary"
          size="small"
          id="price"
          label="Price"
          helperText={error2 ? "Only space or numbers" : ""}
          sx={{ bgcolor: "white", m: "1rem", width: "60vw" }}
          onChange={(e) => handlePrice(e.target.value)}
        />
        <TextField
          color="secondary"
          size="small"
          id="image"
          label="Image URL"
          helperText={error3 ? "Invalid URL" : ""}
          sx={{ bgcolor: "white", m: "1rem", width: "60vw" }}
          onChange={(e) => handleImage(e.target.value)}
        />
      </FormControl>
      <Button
        sx={{ bgcolor: "secondary.main", borderRadius: 0, width: "20vh" }}
        onClick={() => createNewVehicle(newCar)}
      >
        Create
      </Button>
    </Box>
  );
}
