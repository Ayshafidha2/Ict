import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';


const Product = () => {
  var [p, setp] = useState([])
    axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            console.log(res.data)
            setp(res.data)
        })
  return (
    <div>
      
      <Grid container spacing={2}>
        {p.map((p) => {
          return (
            
          
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={ p.image }
        
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   {p.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {p.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            
          )
        })}
  
</Grid>
    </div>
  )
}

export default Product
