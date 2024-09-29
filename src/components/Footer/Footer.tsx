import { Box } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'primary.main', display: "flex", alignItems: 'center', justifyContent: 'center', color: 'white' }} height={90}>
            © Daniil Itsyxon
        </Box>
    );
};

export default Footer;