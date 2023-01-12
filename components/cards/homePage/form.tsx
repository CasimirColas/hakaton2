import React from 'react';
import { Card, Button, Stack, TextField, Typography, Box, Checkbox, FormControlLabel } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import BestSale from './bestSale';
import Marquee from "react-fast-marquee";
import Search from "./search";

function Form() {
    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54'),
      );
    
      const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
      };

  return (
    <Box>
        <Box sx={{display: "flex", justifyContent:"center"}}>
        <Card sx={{
            backgroundColor:"#D9D9D9", 
            m: "20px",
            maxWidth: '95vw',
            width: 'min(95vw, 800px)',
            boxShadow: '0px 5px 5px black'}}>
            <Stack sx={{p: "20px"}}>
                <TextField id="outlined-basic" label="Place of Rental" variant="outlined" />
                <Box sx={{paddingTop: "20px", display: "flex", justifyContent:"center"}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    label="Date & time | departur"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                    <DateTimePicker
                    label="Date & time | return"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                    </LocalizationProvider>
                    </Box>
            </Stack>
        </Card>
        </Box>
        <Stack spacing={2} direction="row" sx={{display: 'flex', justifyContent: 'center'}}>
          <Button variant="contained" size="large" color="secondary" sx={{backgroundColor:"#D9D9D9", color:"black"}}>Classic</Button>
          <Button variant="contained" size="large" color="secondary" sx={{backgroundColor:"#D9D9D9", color:"black"}}>Utility</Button>
          <Button variant="contained" size="large" color="secondary" sx={{backgroundColor:"#D9D9D9", color:"black"}}>Prestige</Button>
        </Stack>
        <Box sx={{display: "flex", justifyContent:"center"}}>
        <Card sx={{backgroundColor:"#D9D9D9", m: "20px", display: "flex", flexDirection: "row", justifyContent:"space-around", maxWidth: '95vw',
            width: 'min(95vw, 800px)', boxShadow: '0px 5px 5px black'}}>
            <Box sx={{display: "flex", flexDirection: "column"}}>
                <Typography variant="h3" sx={{textAlign:"center"}}>GearBox</Typography>
                <FormControlLabel control={<Checkbox color="secondary" />} label="Manual" />
                <FormControlLabel control={<Checkbox color="secondary" />} label="Automatic" />
            </Box>
            <Box sx={{display: "flex", flexDirection: "column"}}>
                <Typography variant="h3" sx={{textAlign:"center"}}>Energy</Typography>
                <FormControlLabel control={<Checkbox color="secondary" />} label="Lead free" />
                <FormControlLabel control={<Checkbox color="secondary" />} label="Diesel fuel" />
                <FormControlLabel control={<Checkbox color="secondary" />} label="Electric" />
                <FormControlLabel control={<Checkbox color="secondary" />} label="Hybrid" />
            </Box>
            <Box sx={{display: "flex", flexDirection: "column"}}>
                <Typography variant="h3" sx={{textAlign:"center"}}>Sort</Typography>
                <Typography variant="h4" sx={{textAlign:"center"}}>Price</Typography>
                <FormControlLabel control={<Checkbox color="secondary" />} label="Crescent" />
                <FormControlLabel control={<Checkbox color="secondary" />} label="Decreasing" />
            </Box>
        </Card>
        </Box>
        <Typography variant="h2" sx={{paddingLeft:"10%", color:"#D65A00"}}>Best Sale</Typography>
        <Marquee gradient={false} speed={40}>
            <Box sx={{display:"flex", justifyContent:"space-around"}}>
                <BestSale />
                <BestSale />
                <BestSale />
                <BestSale />
                <BestSale />
                <BestSale />
            </Box>
        </Marquee>
        <Typography variant="h2" sx={{paddingLeft:"10%", color:"#D65A00"}}>Your Search</Typography>
        <Box>
            <Search />
        </Box>
    </Box>
  );
}

export default Form;
