import { Box, Divider } from '@mui/material';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const PageWrapper = () => {
    return (
        <>
            <Box>
                <Header />
                <Divider />
                <Box component='main' sx={{ flexGrow: 1, minHeight: '82vh' }}>
                    <Outlet />
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default PageWrapper;