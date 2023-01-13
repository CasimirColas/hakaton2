import { Typography, Box, Stack, Button } from '@mui/material';

function BestSale () {

    const cars = [{
        nameModel:"Bugatti",
        nameCar:"Veyron",
        img:'https://www.auto-moto.com/wp-content/uploads/sites/9/2022/02/01-peugeot-208-750x410.jpg',
        price:"65€/H"
        }
    ]
        
    return (
    <Box>
        {cars.map((car, index) => (
            <Stack sx={{ width: 500, height: 350, paddingLeft: "20px" }}>
                <Typography variant="h3" sx={{backgroundColor:"#D65A00", position:"absolute", borderRadius:"10px", p: "3px", opacity:"70%", marginLeft: "1.5%"}}>{car.nameModel} - {car.nameCar}</Typography>
                <img src={car.img} />
                <Box sx={{position: "absolute", paddingTop:"8.5%", paddingLeft:"10%"}}>
                    <Button variant="contained" color="secondary" sx={{backgroundColor: '#f76619', color: "black"}}>{car.price} |  Location</Button>
                </Box>
            </Stack>
            
        ))}
    </Box>
  )}
  
  export default BestSale;
  