import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={1} mt={2}>
            <Typography color='error' fontSize={'40px'} fontWeight={400}>Ошибка</Typography>
            <Typography fontSize={'20px'}>Страница, которую вы ищете, не найдена, либо ещё не создана.</Typography>
            <Button sx={{ backgroundColor: 'rgb(12, 52, 12)', color: 'rgb(250, 250, 240)', alignSelf: 'center' }} size='medium' onClick={goHome} variant='contained'>Вернуться на главную</Button>
        </Box>
    );
};

export default ErrorPage;