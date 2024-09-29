import { Typography } from '@mui/material';
import React from 'react';

type Props = {
    variant: 'h4' | 'h3'
    children: React.ReactNode
}

const Title: React.FC<Props> = ({ variant, children }) => {
    return (
        <Typography variant={variant} sx={{ textAlign: 'center', m: 3, fontWeight: 100, textTransform: 'uppercase' }}>
            {children}
        </Typography>
    );
};

export default Title;