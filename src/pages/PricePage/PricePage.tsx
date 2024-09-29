import { Box, Button, Container, Stack } from '@mui/material';
import Title from '../../components/ui/Title/Title';
import styles from './PricePage.module.css'
import Text from '../../components/ui/Text/Text';
import price1 from '../../assets/price1.jpg'
import price2 from '../../assets/price2.jpg'
import price3 from '../../assets/price3.jpg'
import price4 from '../../assets/price4.jpg'

const PricePage = () => {
    return (
        <Box>
            <Container>
                <Title variant='h3'>
                    Услуги
                </Title>
                <Box p={2}>
                    <Stack direction={'row'} gap={3}>
                        <img src={price1} alt="fish" className={styles.pricePic} />
                        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} p={3}>
                            <div className={styles.priceTitle}>Рыбалка</div>
                            <Text sx={{ mt: 2, mb: 2 }}>Наши водоёмы — мечта для любого рыболова. Мы занимаемся активным зарыблением озера, чтобы каждый мог насладиться процессом ловли. </Text>
                            <Button sx={{ backgroundColor: 'secondary.main', alignSelf: 'flex-start' }}>Забронировать</Button>
                        </Box>
                    </Stack>
                    <Stack direction={'row'} gap={3}>
                        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} p={3}>
                            <div className={styles.priceTitle}>Домики</div>
                            <Text sx={{ mt: 2, mb: 2 }}>Мы предлагаем комфортные домики, оборудованные всеми необходимыми удобствами. Уют, тепло зимой и прохлада летом.</Text>
                            <Button sx={{ backgroundColor: 'secondary.main', alignSelf: 'flex-start' }}>Забронировать</Button>
                        </Box>
                        <img src={price2} alt="home" className={styles.pricePic} />
                    </Stack>
                    <Stack direction={'row'} gap={3}>
                        <img src={price3} alt="fish" className={styles.pricePic} />
                        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} p={3}>
                            <div className={styles.priceTitle}>Беседки</div>
                            <Text sx={{ mt: 2, mb: 2 }}>Летняя беседка с мангалом — лучшее место для завершения дня. Каждая беседка оснащена всеми удобствами, а также имеет прекрасный вид на природу. Рассчитана на 8 человек.</Text>
                            <Button sx={{ backgroundColor: 'secondary.main', alignSelf: 'flex-start' }}>Забронировать</Button>
                        </Box>
                    </Stack>
                    <Stack direction={'row'} gap={3}>
                        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} p={3}>
                            <div className={styles.priceTitle}>Бани и бассейн</div>
                            <Text sx={{ mt: 2, mb: 2 }}>Устали от рек и озёр? Не беда. Наш комплекс оснащён просторными бассейнами и банями, чтобы каждый мог чувствовать себя в своей тарелке.</Text>
                            <Button sx={{ backgroundColor: 'secondary.main', alignSelf: 'flex-start' }}>Забронировать</Button>
                        </Box>
                        <img src={price4} alt="home" className={styles.pricePic} />
                    </Stack>
                </Box>
            </Container >
        </Box >
    );
};

export default PricePage;