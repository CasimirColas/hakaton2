import React from "react";
import { Typography, Box, List, ListItemText } from "@mui/material";

interface Company {
  companyName: string;
  email: string;
  phone: string;
  adress: string;
  city: string;
  website: string;
}

export default function CompanyInfo() {
  const company: Company = {
    companyName: "Wild Car Service",
    email: "best-car@wsc.com",
    phone: "06 51 12 26 67",
    adress: "88 rue Mils Haleur",
    city: "Strasbourg",
    website: "http://wild-car-service.com",
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ paddingBottom: ".5rem", borderBottom: "2px solid #33363F" }}
      >
        Yours Informations
      </Typography>
      {company ? (
        <List
          sx={{
            display: "flex",
            justifyItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <ListItemText
            primary="Company Name"
            secondary={company.companyName}
          />
          <ListItemText primary="Email" secondary={company.email} />
          <ListItemText primary="Phone" secondary={company.phone} />
          <ListItemText primary="Adress" secondary={company.adress} />
          <ListItemText primary="City" secondary={company.city} />
          <ListItemText primary="Website" secondary={company.website} />
        </List>
      ) : (
        "Please wait a moment. Or reload the page."
      )}
    </Box>
  );
}
