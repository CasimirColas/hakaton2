import React from "react";
import { useRouter } from "next/router";
import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";
import deleteCarById from "../../dynamodb/functionCars/delete";
import updateCar from "../../dynamodb/functionCars/update";

interface Vehicle {
  img: string;
  cost: string;
  gearbox: string;
  energy: string;
  carStatus: string;
  brand: string;
  id: string;
  type: string;
  carName: string;
}
async function getCarsCompany(name: string) {
  const response = await fetch(
    `http://localhost:3000/api/cars/company/${name}`
  );
  const data = await response.json();
  return data;
}
interface Company {
  companyName: string;
}
export default function HiredNow(props: Company) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  function handleClose() {
    setOpen(false);
  }
  const [vehicleList, setVehicleList] = React.useState([]);
  React.useEffect(() => {
    getCarsCompany(props.companyName).then((result) => {
      setVehicleList(result.sort());
    });
  });
  function changeDispo(value: string, idCar: string) {
    if (value === "D") {
      updateCar(idCar, { carStatus: "I" });
      router.push("./profile");
    } else if (value === "I") {
      updateCar(idCar, { carStatus: "D" });
      router.push("./profile");
    }
  }
  function deleteCar(id: String) {
    handleClose();
    deleteCarById(id);
  }
  return (
    <Box sx={{ m: "5vh 5vw" }}>
      <Typography variant="h3" align="left">
        Yours Vehicles
      </Typography>
      {vehicleList
        ? vehicleList.map((vehicle: Vehicle) => (
            <Card
              key={vehicle.id}
              sx={{
                marginTop: "1rem",
                p: 0,
                borderRadius: "5px",
                bgcolor: "primary.main",
              }}
            >
              <CardHeader
                sx={{
                  bgcolor: "secondary.main",
                  p: ".5rem",
                }}
                title={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h5" sx={{ opacity: 1 }}>
                      Vehicule n° {vehicle.id}
                    </Typography>
                    <Button
                      onClick={() => changeDispo(vehicle.carStatus, vehicle.id)}
                    >
                      {vehicle.carStatus.includes("D")
                        ? "Available"
                        : "Unvailable"}
                    </Button>
                    <Brightness1Icon
                      sx={
                        vehicle.carStatus.includes("D")
                          ? { color: "green" }
                          : { color: "red" }
                      }
                    />
                  </div>
                }
              />
              <CardContent sx={{ p: ".5rem", m: 0 }}>
                <Accordion sx={{ p: 0, bgcolor: "inherit" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      m: 0,
                      p: 0,
                    }}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="h4">More Info</Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{
                      padding: ".5rem 0",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={vehicle.img}
                      sx={{ width: "90vw", marginBottom: "1rem" }}
                      alt={`Picture of ${vehicle.carName} ${vehicle.brand}`}
                    />
                    <Typography>
                      {vehicle.carName} - {vehicle.brand}
                    </Typography>
                    <Typography>
                      {vehicle.gearbox.includes("M") ? "Manual" : "Auto"} -{" "}
                      {vehicle.energy.includes("L")
                        ? "Lead Free"
                        : vehicle.energy.includes("D")
                        ? "Diesel"
                        : vehicle.energy.includes("E")
                        ? "Electric"
                        : "Hybrid"}{" "}
                      -{" "}
                      {vehicle.type.includes("C")
                        ? "Classic"
                        : vehicle.type.includes("U")
                        ? "Utility"
                        : "Prestige"}
                    </Typography>
                    <Typography>Hiring Price : {vehicle.cost}</Typography>
                    <Button
                      sx={{
                        margin: ".5rem 0",
                        width: "20vh",
                        bgcolor: "secondary.main",
                      }}
                      onClick={handleClickOpen}
                    >
                      <Typography>Delete</Typography>
                      <CancelIcon />
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogContent>
                        <DialogContentText>
                          Did you want to delete this vehicle ?
                          <i> The consequence will be permanant</i>
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          sx={{ color: "secondary.main" }}
                          onClick={() => handleClose()}
                        >
                          Non
                        </Button>
                        <Button
                          sx={{ color: "secondary.main" }}
                          onClick={() => deleteCar(vehicle.id)}
                          autoFocus
                        >
                          Oui
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          ))
        : "please wait"}
    </Box>
  );
}
