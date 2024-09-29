import { Box, Container, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import Button from '../ui/Button/Button';

const Header = () => {
    return (
        <>
            <Box sx={{ backgroundColor: 'primary.main', display: "flex", alignItems: 'center' }} height={60}>
                <Container>
                    <Stack direction={'row'} alignItems={'center'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: "flex", gap: 5 }}>
                            <Link className={styles.headerLink} to='/'>Главная</Link>
                            <Link className={styles.headerLink} to='/statistic'>Статистика</Link>
                            <Link className={styles.headerLink} to='/news'>Услуги</Link>
                            <Link className={styles.headerLink} to='/contact'>Контакты</Link>
                        </Box>
                        <Button>Заказать звонок</Button>
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

export default Header;