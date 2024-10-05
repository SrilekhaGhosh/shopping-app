import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Button, Card, Grid ,  Avatar,} from '@mui/material';
import { removeFromCart } from '../Features/AddcartSlice' // Redux action

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItem);
  //const totalAmount = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
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
        Total Amount : 
        {/* Total Amount: ${totalAmount.toFixed(2)} */}
      </Typography>
    </Box>
  );
};

export default Cart;
