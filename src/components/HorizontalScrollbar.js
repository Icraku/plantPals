import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HorizontalScrollbar = ({ /* indoorPlants, outdoorPlants */category ,setCategory }) => {
  /* const uniqueIndoorPlants = getUniquePlants(indoorPlants);
  const uniqueOutdoorPlants = getUniquePlants(outdoorPlants); */

  return (
      <Box display="flex" flexDirection="row">
      <Button onClick={() => setCategory('Indoor')}
        sx={{
          backgroundColor: category === 'Indoor' ? 'lightgreen' : 'default',
        }}>
        <Typography
          variant="h6"
          m="0 40px"
          sx={{
            color: 'darkgreen'
          }}
        >
          Indoors Plants
        </Typography>
          </Button>
      <Button onClick={() => setCategory('Outdoor')}
        sx={{
          backgroundColor: category === 'Outdoor' ? 'lightgreen' : 'default',
        }}>
        <Typography
          variant="h6"
          m="0 40px"
          sx={{
            color: 'darkgreen'
          }}
        >
          Outdoor Plants
              </Typography>
          </Button>
      </Box>
  );
};

export default HorizontalScrollbar;
