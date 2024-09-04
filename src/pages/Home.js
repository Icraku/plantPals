import React, {useState} from 'react'
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchPlants from '../components/SearchPlants';
import Plants from '../components/Plants';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchPlants />
      <Plants />
      
    </Box>
  )
}

export default Home