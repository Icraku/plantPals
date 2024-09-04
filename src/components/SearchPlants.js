import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Button, TextField } from '@mui/material';
import { plantOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import PlantList from './PlantList';

const SearchPlants = () => {
  const [search, setSearch] = useState('')
  const [plants, setPlants] = useState([])
  const [indoorPlants, setIndoorPlants] = useState([])
  const [outdoorPlants, setOutdoorPlants] = useState([])
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchPlantsData = async () => {
      const urlIndoor = `https://perenual.com/api/species-list?key=${process.env.REACT_APP_PLANT_PERENUAL_API_KEY}&indoor=1`;
      const urlOutdoor = `https://perenual.com/api/species-list?key=${process.env.REACT_APP_PLANT_PERENUAL_API_KEY}&outdoor=0`;
      const indoorPlantsData = await fetchData(urlIndoor, plantOptions);
      const outdoorPlantsData = await fetchData(urlOutdoor, plantOptions);
      /* console.log('Indoor', indoorPlantsData); */
      /*console.log('Outdoor', outdoorPlantsData); */

      setIndoorPlants(indoorPlantsData.data || []);
      setOutdoorPlants(outdoorPlantsData.data || []);
    }
    fetchPlantsData();
  }, [])
  

  const handleSearch = async () => {
    if (search) {
      const url = `https://perenual.com/api/species-list?key=${process.env.REACT_APP_PLANT_PERENUAL_API_KEY}&q=${search}`;
      const plantData = await fetchData(url, plantOptions);

      if (plantData && plantData.data) {
        const searchPlants = plantData.data.filter(
          (plant) =>
            plant.common_name.toLowerCase().includes(search) ||
            plant.other_name.toLowerCase().includes(search) ||
            plant.scientific_name.toLowerCase().includes(search)
        );
        setPlants(searchPlants);
      }

      setSearch('');
    }
  };


  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px', xs:'30px'}}} mb="50px" textAlign="center">
        Awesome Plants You <br/>Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px"
          }}
          height="76px" placeholder='Search for plants' type="text" 
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        <Button className='search-btn' variant='contained' color='success' 
          sx={{
            padding: "10px",
            backgroundColor: "#289128",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right:"0" /* used when the position is absolute */
          }}
          onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar category={category} setCategory={setCategory} />
        <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
          {category === 'Indoor' && (
            <PlantList plants={indoorPlants} />
          )}
          {category === 'Outdoor' && (
            <PlantList plants={outdoorPlants} />
          )}
        </Box>
      </Box>
    </Stack>
  )
}

export default SearchPlants