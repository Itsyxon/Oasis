import { Box, Button, Container, Stack } from '@mui/material';
import Title from '../../components/ui/Title/Title';
import styles from './ContactPage.module.css'
import Text from '../../components/ui/Text/Text';

const ContactPage = () => {
    return (
        <Box>
            <Container>
                <Title variant='h3'>
                    Контакты
                </Title>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Box>
                        <div className={styles.contactTitle}>Природно-туристический комплекс «Оазис»</div>
                        <div className={styles.contactTitleSecondary}>Месторасположение</div>
                        <Text>Всемирная паутина «Интернет»</Text>
                        <div className={styles.contactTitleSecondary}>Телефон</div>
                        <Text>+0 (101)-01-01 (звонить строго с 00:00 до 00:01)</Text>
                        <div className={styles.contactTitleSecondary}>Email</div>
                        <Text>Тут мог быть ваш email</Text>
                        <div className={styles.contactTitleSecondary}>Как проехать</div>
                        <Text>Можно на велосипеде, можно на машине, можно пешком. </Text>
                        <Button sx={{ backgroundColor: 'secondary.main', mt: 2 }}>Связаться с нами</Button>
                    </Box>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3cb6f157a3a8a52e5b839e28ae1ff59ef0745ac7b7da68331be2c53761f86c0b&amp;source=constructor" width="500" height="400"></iframe>
                </Stack>
            </Container>
        </Box>
    );
};

export default ContactPage;