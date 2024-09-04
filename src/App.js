import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import PlantDetail from './pages/PlantDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
      <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plant/:id" element={<PlantDetail />} />
        </Routes>
      <Footer/>
      </Box>
  );
}

export default App;
