import { Typography } from '@mui/material';
import React from 'react';
import { SxProps } from '@mui/material';

type Props = {
    children: React.ReactNode
    sx?: SxProps
}


const Text: React.FC<Props> = ({ children, sx }) => {
    return (
        <Typography sx={sx}>
            {children}
        </Typography>
    );
};

export default Text;