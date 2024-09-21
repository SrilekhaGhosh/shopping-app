import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Card } from '@mui/material';
import Cardd from './Card'
import './Home.css'

function Home() {

   const[product,setproduct] =useState([])



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
    <div  className='containers'>
     {product&& product.map((item)=>(
       <Cardd   item ={item}/>
     
     ) )}
    </div>
  )
}

export default Home
