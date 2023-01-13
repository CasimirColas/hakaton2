import React, { useRef, useEffect, useState, useContext } from 'react';
import dynamic from 'next/dynamic';
const AddressAutofill = dynamic(() => import('@mapbox/search-js-react').then((mod) => mod.AddressAutofill), {
  ssr: false,
});
import { Card, Button, Stack, TextField, Typography, Box, Checkbox, FormControlLabel } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import BestSale from './bestSale';
import Marquee from "react-fast-marquee";
import Search from "./search";
import axios from 'axios';
import DepartureInput from './DepartureInput';


function Form() {

    const [departureAddress, setDepartureAddress] = useState();
    const [geoLocLoading, setGeoLocLoading] = useState(false);
    const destinationRef = useRef();

    const accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

    const handleGeoLoc = () => {
        setGeoLocLoading(true);
        const success = async (data) => {
          const coord = data.coords;
          const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${coord.longitude},${coord.latitude}.json?access_token=${accessToken}`;
          const res = await axios.get(endpoint);
          const base = res.data.features[0];
          setDepartureAddress({
            address: `${base.address} ${base.text}`,
            city: base.context[1].text,
            country: base.context[3].text,
            coord: [coord.longitude, coord.latitude],
          });
          setGeoLocLoading(false);
        };
        navigator.geolocation.getCurrentPosition(success);
      };

      const handleDeparture = async (e) => {
        const data = e.features[0].properties;
        setDepartureAddress({
          address: data.address_line1,
          city: data.place,
          country: data.country,
          coord: e.features[0].geometry.coordinates,
        });
      };

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
            <DepartureInput
                  accessToken={accessToken}
                  departureAddress={departureAddress}
                  handleDeparture={handleDeparture}
                  geoLocLoading={geoLocLoading}
                  handleGeoLoc={handleGeoLoc}
                />

                <AddressAutofill
                  accessToken={accessToken}
                  options={{
                    language: 'fr',
                    country: 'FR',
                  }}
                >
                </AddressAutofill>
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
        <Typography variant="h1" sx={{paddingLeft:"10%", marginBottom:"10px", color:"white", background: 'linear-gradient(to right, #131729, #111524, #101320, #0e111b, #0b0e17, #0b0e17, #0b0e17, #0b0e17, #0e111b, #101320, #111524, #131729)'}}>Best Sale</Typography>
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
        <Typography variant="h1" sx={{paddingLeft:"10%", marginBottom:"10px", color:"white", background: 'linear-gradient(to right, #131729, #111524, #101320, #0e111b, #0b0e17, #0b0e17, #0b0e17, #0b0e17, #0e111b, #101320, #111524, #131729)'}}>Your Search</Typography>
        <Box>
            <Search />
        </Box>
    </Box>
  );
}

export default Form;
