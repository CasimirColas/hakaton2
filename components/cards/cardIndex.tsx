import React from 'react';
import { Typography, Box, Button } from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Form from './homePage/form';

function IndexBaseCard() {
  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <Typography variant="h1" sx={{p: "3rem 0 1rem 1.5rem",
          fontFamily: 'Righteous',}}>Sherlockation</Typography>
          <Box sx={{display: 'flex', justifyContent: 'center', paddingRight: '2%'}}>
            <Button color="secondary" variant="contained" sx={{color:"black"}}>
              <AccountBoxIcon fontSize="large"/>Connexion
            </Button>
            <Button color="secondary" variant="outlined" sx={{color: "black"}}>
              <AccountBoxIcon fontSize="large"/>Inscription
            </Button>
          </Box>
          <Form />
    </Box>
  )
}

export default IndexBaseCard;
