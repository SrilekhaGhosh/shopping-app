import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Card } from '@mui/material';
import Cardd from './Card'
import './Home.css'
import {Box} from '@mui/material';

import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';


function Home() {

   const[product,setproduct] =useState([])

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
   

  return (
  

    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 2,
        padding: 2,
      }}
    >
    <div  className='containers' >
     {product&& product.map((item)=>(
       <Cardd key={item.id}  item ={item}/>
     
     ) )}

     
    </div>
    
    </Box>


  )
}

export default Home
