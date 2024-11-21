import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Button, Card, Grid ,  Avatar, IconButton} from '@mui/material';
import { removeFromCart } from '../Features/AddcartSlice' // Redux action
import { useEffect } from 'react';
import {  clearCart} from '../Features/AddcartSlice'
import { updateQuantity } from '../Features/AddcartSlice'; 
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { DatePicker } from '@mui/lab';


import { setDeliveryDate } from '../Features/AddcartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItem);
  const [itemId,setItemId]=useState(0)
  const totalAmount = useSelector((state) => state.cart.totalPrice);
  const deliveryDate = useSelector((state) => state.cart.deliveryDate);
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(deliveryDate || null);

  const handleRemoveFromCart = (id) => {
    setItemId(itemId^1)
    dispatch(removeFromCart(id));
  };
 console.log(cartItems)
useEffect(()=>{
 
},[itemId])

const handleDateChange = (newDate) => {
  setSelectedDate(newDate);
  dispatch(setDeliveryDate(newDate)); // Update deliveryDate in the Redux store
};




const handleIncreaseQuantity = (item) => {
  dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
};

const handleDecreaseQuantity = (item) => {
  if (item.quantity > 1) {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  } else {
    dispatch(removeFromCart(item.id));
  }
};
  

const handleclearCart=()=>{
  dispatch(clearCart());
}




  return (
    <Box p={3}>
      {/* <Typography variant="h4" gutterBottom>
        Your Cart
       
      </Typography> */}
      <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6">Your cart is empty.</Typography>
      ) : (
        <>
          <Grid container spacing={2}>
            {/* Map through cartItems and display them */}
          </Grid>
          
          {/* Clear Cart Button */}
          <Box mt={3} display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              color="secondary"
              onClick={handleclearCart}
            >
              Clear Cart
            </Button>
            <Typography variant="h5">
              Total Amount: ${totalAmount.toFixed(2)}
            </Typography>
          </Box>
        </>
      )}
    </Box>
      {/* <Button variant="contained" color="success" onClick={()=>handleclearCart}>
  Clear Cart
</Button> */}
      <Grid container spacing={2}>
        {cartItems && cartItems.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Card variant="outlined" sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
            <Avatar
                    variant="square"
                    src={item.image}
                    alt={item.title}
                    sx={{ width: 80, height: 80, mr: 2 }}
                  />
                    
              <Box>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">Quantity: {item.quantity}</Typography>
               
                 <Typography variant="body2">Price: ${item.price}</Typography>
              </Box>
              <Box mt={3}>
        <Typography variant="h6">Select Delivery Date</Typography>
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(props) => <TextField {...props} fullWidth />}
        />
      </Box>
              <Box display="flex" alignItems="center">
                  <IconButton onClick={() => handleDecreaseQuantity(item)}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography variant="body1">{item.quantity}</Typography>
                  <IconButton onClick={() => handleIncreaseQuantity(item)}>
                    <AddIcon />
                  </IconButton>
                </Box>
           
              <Box>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove from Cart
                </Button>
               
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" mt={3}>
        Total Amount : {totalAmount.toFixed(2)}
      
      </Typography>
    </Box>
  );
};

export default Cart;
