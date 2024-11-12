import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { addTocart } from '../Features/AddcartSlice';
import { useEffect } from 'react';


export default function ImgMediaCard({item}) {

  const dispatch = useDispatch();


 const handleAddToCart =() =>{
  dispatch(addTocart(item))
 }




  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {item.title}
         
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {item.description}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <p className="card-price">₹{item.price}</p>
        
       
        </Typography>


         
      </CardContent>
      <CardActions>
      <Button onClick={handleAddToCart} variant="contained">Add to cart</Button>
       
      <Rating name="read-only" value={item.rating.rate} readOnly />
      <Typography component="legend">  ({item.rating.count})</Typography>
    

      </CardActions>
    </Card>
  );
}