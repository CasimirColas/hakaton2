import React from "react";
import { Typography, Box, Button } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Form from "../cards/homePage/form";
import { useRouter } from "next/router";

function IndexBaseCard() {
  const router = useRouter();

  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <Typography
        variant="h1"
        sx={{ p: "3rem 0 1rem 1.5rem", fontFamily: "Righteous" }}
      >
        Sherlockation
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", paddingRight: "2%" }}
      >
        <Button
          onClick={() => router.push("/login")}
          color="secondary"
          variant="contained"
          sx={{ color: "black" }}
        >
          <AccountBoxIcon fontSize="large" />
          Log In
        </Button>
        <Button
          onClick={() => router.push("/signup")}
          color="secondary"
          variant="outlined"
          sx={{ color: "black" }}
        >
          <AccountBoxIcon fontSize="large" />
          SIgn up
        </Button>
      </Box>
      <Form />
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography>COPYRIGHT 2023 - MENTION LEGALES</Typography>
        <Typography>Durhack Company - Wild Team</Typography>
      </Box>
    </Box>
  );
}

export default IndexBaseCard;
