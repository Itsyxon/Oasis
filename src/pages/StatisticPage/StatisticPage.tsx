import { Box, Container } from '@mui/material';
import Title from '../../components/ui/Title/Title';
import Text from '../../components/ui/Text/Text';

const StatisticPage = () => {
    return (
        <Box>
            <Container>
                <Title variant='h3'>
                    Статистика
                </Title>
                <Text sx={{ textAlign: 'center' }}>
                    Здесь представлена статистика пойманной рыбы в наших водоёмах!
                </Text>

            </Container>
        </Box>
    );
};

export default StatisticPage;