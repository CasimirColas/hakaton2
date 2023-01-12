import React from "react";
import { Typography, Box, List, ListItemText } from "@mui/material";

interface User {
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
  adress: string;
  city: string;
}

export default function UserInfo() {
  const user: User = {
    firstname: "Yavuz",
    lastname: "Kutuk",
    email: "best-car@wsc.com",
    phone: "06 51 12 26 67",
    adress: "88 rue Mils Haleur",
    city: "Strasbourg",
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
      {user ? (
        <List
          sx={{
            display: "flex",
            justifyItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <ListItemText
            primary="Name"
            secondary={`${user.firstname} - ${user.lastname}`}
          />
          <ListItemText primary="Email" secondary={user.email} />
          <ListItemText primary="Phone" secondary={user.phone} />
          <ListItemText primary="Adress" secondary={user.adress} />
          <ListItemText primary="City" secondary={user.city} />
        </List>
      ) : (
        "Please wait a moment. Or reload the page."
      )}
    </Box>
  );
}
