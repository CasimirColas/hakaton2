import React from "react";
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
  FormControlLabel,
  Switch,
} from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Vehicle {
  img: string;
  cost: string;
  gearbox: string;
  energy: string;
  status: string;
  brand: string;
  id: string;
  name: string;
  type: string;
}
const vehicle: Vehicle = {
  img: "https://www.automobile-magazine.fr/asset/cms/840x394/199697/config/147363/bentley-continental-gt-s-1s.jpg",
  cost: "400$",
  gearbox: "M",
  energy: "D",
  status: "D",
  brand: "Bentley",
  id: "2",
  name: "Continental GT",
  type: "P",
};
export default function HiredNow() {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Box sx={{ m: "0 5vw" }}>
      <Typography variant="h3" align="left">
        Yours Vehicles
      </Typography>
      <Card
        sx={{
          marginTop: "1rem",
          borderRadius: "5px",
          bgcolor: "primary.main",
          opacity: 0.75,
          color: "black",
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
              <FormControlLabel
                value="start"
                control={
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    color="primary"
                  />
                }
                label={checked ? "Available" : "Not Available"}
                labelPlacement="start"
              />
              <Brightness1Icon
                sx={
                  vehicle.status.includes("D")
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
            </div>
          }
        />
        <CardContent sx={{ p: ".5rem" }}>
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
                alt={`Picture of ${vehicle.name} ${vehicle.brand}`}
              />
              <Typography>
                {vehicle.name} - {vehicle.brand}
              </Typography>
              <Typography>
                {vehicle.gearbox.includes("M") ? "Manual" : "Auto"} -{" "}
                {vehicle.energy.includes("L")
                  ? "Lead Free"
                  : vehicle.energy.includes("D")
                  ? "Diesel"
                  : vehicle.energy.includes("E")
                  ? "Electric"
                  : "Hybrid"}
              </Typography>
              <Typography>Hiring Price : {vehicle.cost}</Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </Box>
  );
}
