import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography, Box } from "@mui/material/";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useSWR from "swr";
import useMediaQuery from "@mui/material/useMediaQuery";

const fetcher = async () => {
  const response = await fetch("http://localhost:3000/api/cars");
  const data = await response.json();
  return data;
};

export default function MediaCard() {
  const matches = useMediaQuery("(max-width:680px)");
  const { data, error, isLoading } = useSWR("/api/cars", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  function realGear(letter: string) {
    switch (letter) {
      case "M":
        return "Manual";
      case "A":
        return "Automatic";
      default:
        return "";
    }
  }

  function realEnergy(letter: string) {
    switch (letter) {
      case "L":
        return "Lead Free";
      case "D":
        return "Diesel Fuel";
      case "E":
        return "Electric";
      case "H":
        return "Hybrid";
      default:
        return "";
    }
  }
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}
    >
      {data.map((car: any) => (
        <Card key={car.id} sx={{ maxWidth: 345, minWidth: 340, marginTop: "10px" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={car.img}
            title="voiture location"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {car.brand} | {car.name}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ dispaly: "flex" }}>
              <Typography color="secondary">{realGear(car.gearbox)}</Typography>
              <Typography color="secondary">
                {realEnergy(car.energy)}
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{ backgroundColor: "#f76619", color: "black" }}
            >
              {car.cost} | Location
            </Button>
          </Box>
          {matches ? (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Show more</Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography>
              <Typography variant="h4">Sale By {car.companyName}</Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
              </AccordionDetails>
            </Accordion>
          ) : (
            <Typography>
              <Typography variant="h4">Sale By {car.companyName}</Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          )}
        </Card>
      ))}
    </Box>
  );
}
