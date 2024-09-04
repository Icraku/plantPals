import React, { useState } from 'react';
import { Box, Typography, Modal, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Plant from '../assets/icons/plant.png';

const PlantModal = ({ open, onClose, plant }) => {
    const [step, setStep] = useState(0);

    const modalStyle = {
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        /* border: '0.2px solid #000', */
        boxShadow: 24,
        p: 4,
        borderRadius: '8px',
        display: 'flex',
    };

    const backdropStyle = {
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: 8,
        right: 8,
        color: '#000',
    };

    const imageStyle = {
        width: '40%',
        height: 'auto',
        marginRight: '20px',
        borderRadius: '8px',
    };

    const textSectionStyle = {
        flex: 1,
    };

    const handleNext = () => {
        if (step < 2) {
            setStep((prevStep) => prevStep + 1);
        }
    };

    const handleFinish = () => {
        setStep(0);
        onClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleFinish}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ ...backdropStyle }}
        >
            <Box sx={modalStyle}>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={closeButtonStyle}
                >
                    <CloseIcon />
                </IconButton>
                {plant && (
                    <>
                        <img
                            src={Plant} /* REPLACE WITH PLANTS URL FROM THE API */
                            alt={plant.common_name}
                            style={imageStyle}
                        />
                        <Box sx={textSectionStyle}>
                            {step === 0 && (
                                <>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        {plant.common_name} ({plant.scientific_name})
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        This is a beautiful plant to keep!!!!
                                    </Typography>
                                    {/* Add more plant details here */}
                                </>
                            )}
                            {step === 1 && (
                                <>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Water Requirements
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        This is a beautiful plant to keep!!!!
                                    </Typography>
                                    {/* Add more plant details here */}
                                </>
                            )}
                            {step === 2 && (
                                <>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Sunlight Requirements
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        This is a beautiful plant to keep!!!!
                                    </Typography>
                                    {/* Add more plant details here */}
                                </>
                            )}
                            <Button
                                variant="contained"
                                color="success"
                                sx={{ mt: 4 }}
                                onClick={step < 2 ? handleNext : handleFinish}
                            >
                                {step < 2 ? 'Next' : 'Finish'}
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
        </Modal>
    );
};

export default PlantModal;