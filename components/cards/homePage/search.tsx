


// function Search() {

    

//     return (
//         <Box>
//         {cars.map((car, index) => (
//             <CardMedia
//             sx={{ objectFit: "contain" }}
//             height="200px"
//             component="img"
//             image={car.img}
//             alt={car.nameModel}
//           />
            
//         ))}
//         </Box>
//     )
    
//   }
  
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Typography, Box} from '@mui/material/';

export default function MediaCard() {

    const cars = [{
        nameModel:"Bugatti",
        nameCar:"Veyron",
        img:'https://www.auto-moto.com/wp-content/uploads/sites/9/2022/02/01-peugeot-208-750x410.jpg',
        price:"65€/H"
        },
        {
        nameModel:"Bugatti",
        nameCar:"Veyron",
        img:'https://www.auto-moto.com/wp-content/uploads/sites/9/2022/02/01-peugeot-208-750x410.jpg',
        price:"65€/H"
        },
        {
        nameModel:"Bugatti",
        nameCar:"Veyron",
        img:'https://www.auto-moto.com/wp-content/uploads/sites/9/2022/02/01-peugeot-208-750x410.jpg',
        price:"65€/H"
        },
        {
        nameModel:"Bugatti",
        nameCar:"Veyron",
        img:'https://www.auto-moto.com/wp-content/uploads/sites/9/2022/02/01-peugeot-208-750x410.jpg',
        price:"65€/H"
        }
    ]

  return (
    <Box sx={{display:"flex", flexWrap: "wrap", justifyContent:"space-around"}}>
        {cars.map((car, index) => (
    <Card sx={{ maxWidth: 345, minWidth: 60 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={car.img}
        title="voiture location"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {car.nameModel}  |  {car.nameCar}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
  ))}
    </Box>
  );
}