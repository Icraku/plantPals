import React, { useState, useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Modal from './Modal';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/move-right.png';
import LeftArrowIcon from '../assets/icons/move-left.png';

const getUniquePlants = (plants) => {
  const seen = new Set();
  return plants.filter((plant) => {
    const isDuplicate = seen.has(plant.common_name);
    seen.add(plant.common_name);
    return !isDuplicate;
  });
};

/* Arrow functionality */
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className='right-arrow'>
      <img src={LeftArrowIcon} alt='left-arrow' />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className='left-arrow'>
      <img src={RightArrowIcon} alt='right-arrow' />
    </Typography>
  );
};

const PlantList = ({ plants = [], title }) => {
  const [showAll, setShowAll] = useState(false);
  const uniquePlants = getUniquePlants(plants);
  const displayedPlants = showAll ? uniquePlants : uniquePlants.slice(0, 10);

  const [selectedPlant, setSelectedPlant] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (plant) => {
    setSelectedPlant(plant);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedPlant(null);
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  const cardStyle = {
    position: 'relative',
    borderRadius: '47px',
    overflow: 'hidden',
    textDecoration: 'none',
    cursor: 'pointer',
    margin: '0 20px',
    width: 200,
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.4s ease-in-out',
    '&:hover': {
      background: 'darkgreen',
    },
    '&:hover .card__header': {
      transform: 'translateY(-100%)',
    },
    '&:hover .card__overlay': {
      transform: 'translateY(0)',
    },
  };

  const headerOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    borderRadius: '40px',
    backgroundColor: 'darkgreen',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    transition: 'transform 0.5s ease-in-out',
  };

  return (
    <>
      <Modal
        open={showModal}
        onClose={closeModal}
        plant={selectedPlant}
      />
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {displayedPlants.map((plant, index) => (
          <Box key={index}
            sx={{
              ...cardStyle,
              backgroundColor: 'darkgreen',
            }}
            onClick={() => openModal(plant)} // Open modal with plant data
          >
            <Box
              className="card__header"
              sx={{
                ...headerOverlayStyle,
                transform: 'translateY(0)',
              }}
            >
              <Typography variant="h6" sx={{ color: '#fff' }}>{plant.common_name}</Typography>
              {/* <Typography variant="caption" sx={{ color: '#fff' }}>
                Click to learn more
              </Typography> */}
            </Box>
            <Box
              className="card__overlay"
              sx={{
                ...headerOverlayStyle,
                transform: 'translateY(100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'lightgreen',
              }}
            >
              <Typography variant="h6" sx={{ color: 'darkgreen' }}>{plant.scientific_name}</Typography>
              <Typography variant="caption" sx={{ color: 'darkgreen' }}>
                (Scientific Name)
              </Typography>
              <Typography variant="caption" sx={{ color: 'darkgreen' }}>
                Click to learn more
              </Typography>
            </Box>
          </Box>
        ))}
      </ScrollMenu>
      {uniquePlants.length > 10 && !showAll && (
        <Button onClick={() => setShowAll(true)} sx={{
          mt: '40px',
          backgroundColor: "lightgreen",
          color: 'darkgreen',
          position: 'absolute',
          right: '0'
        }}>
          Show More
        </Button>
      )}
      {showAll && (
        <Button onClick={() => setShowAll(false)} sx={{
          mt: '40px',
          backgroundColor: "lightgreen",
          color: 'darkgreen',
          position: 'absolute',
          right: '0'
        }}>
          Show Less
        </Button>
      )}
    </>
  );
};

export default PlantList;
