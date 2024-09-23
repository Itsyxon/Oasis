import { Box, Container } from '@mui/material'
import Title from '../../components/ui/Title/Title'
import lake from '../../assets/lake.jpg'
import Text from '../../components/ui/Text/Text'
import styles from './HomePage.module.css'

function HomePage() {
  return (
    <Box>
      <Container>
        <Box sx={{ p: 2 }}>
          <Title variant='h3'>
            Природно-туристический комплекс «Оазис»
          </Title>
          <Text sx={{ textAlign: 'center' }}>Добро пожаловать на сайт туристической базы отдыха и рыбалки «Оазис»! Мы рады предложить вам уютное и комфортабельное место для отдыха на природе, где вы сможете насладиться красотой окружающей природы и насыщенным досугом. <br />Наша база расположена в живописном месте, вдали от городской суеты, что позволит вам насладиться тишиной и спокойствием. Здесь вы сможете отдохнуть от повседневных забот, попробовать свои силы в рыбной ловле и провести время с семьей и друзьями.</Text>
          <Text sx={{ textAlign: 'center', mt: 2 }}>На территории базы есть уютные домики, оборудованные всем необходимым для проживания, а также кафе, где можно насладиться вкусной домашней кухней.
            Мы приглашаем вас провести незабываемое время на базе отдыха и рыбалки "Оазис" и насладиться атмосферой природы и уюта.</Text>
        </Box>
      </Container>
      <img className={styles.lakeBackground} src={lake} alt="lake" />
    </Box>
  )
}

export default HomePage
