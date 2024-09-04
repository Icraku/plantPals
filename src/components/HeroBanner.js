import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

import Hero from '../assets/icons/Hero.png';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '120px', xs: '70px' },
      ml: {sm: '50px'}
    }} position="relative" p="20px">
      
      <Typography 
        color="#36454F" 
        fontWeight="600" 
        fontSize="22px">PlantPals
      </Typography>
      <Typography 
        color="#36454F" 
        fontWeight="600" 
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
          Plants for Pals</Typography>
      <Typography 
        color="#36454F" 
        lineHeight="35px" 
        fontSize="22px" mb={3}>
          Helping each other become better plant-parents</Typography>
      <Button 
        variant='contained' 
        color='success' 
        href='#plants'
        sx={{
          padding: "10px",
          backgroundColor: "#289128"
        }}>
          Explore Plants</Button>
      <Typography 
        fontWeight="600" 
        fontSize="170px"
        color="#36454F"
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' },
         }}>
          PlantPals</Typography>
      <img 
        src={Hero} 
        alt='Banner' 
        className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner