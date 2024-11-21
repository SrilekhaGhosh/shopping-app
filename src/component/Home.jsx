import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Card } from '@mui/material';
import Cardd from './Card'
import './Home.css'
import {Box, TextField,InputAdornment, IconButton} from '@mui/material';

import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';
import SearchIcon from "@mui/icons-material/Search";




function Home() {

   const[product,setproduct] =useState([])
   const [searchTerm, setSearchTerm] = useState("");
   const dispatch = useDispatch();
   const cart=useSelector((state) => state.cart);
   console.log(cart.cartItem)

   


   useEffect (()=>{
    fetchData();
   },[]

    
   )


   const  fetchData = async ()=>{             
    try {
        const responce= await axios.get("https://fakestoreapi.com/products")
        setproduct(responce.data)
        console.log(product)
        
    } catch (error) {
       console.log (error.message) 
    }
   }

   
   console.log(product)





   const filteredProducts = product.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
   

  return (

<>
      {/* Search Bar */}
      <Box display="flex" justifyContent="center" mt={3} mb={3}>
        <TextField
          variant="outlined"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ width: "50%" }}
        />
      </Box>

      {/* Product List */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          padding: 2,
        }}
      >
        <div className="containers">
          {filteredProducts.map((item) => (
            <Cardd key={item.id} item={item} />
          ))}
        </div>
      </Box>
    </>
  );
};

    
  




export default Home
