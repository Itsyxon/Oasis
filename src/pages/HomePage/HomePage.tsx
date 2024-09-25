import { Box, Container } from '@mui/material'
import Title from '../../components/ui/Title/Title'
import Text from '../../components/ui/Text/Text'
import styles from './HomePage.module.css'
import oasis from '../../assets/oasis.svg'

function HomePage() {
  return (
    <Box>
      <Container>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Title variant='h3'>
            Природно-туристический комплекс «Оазис»
          </Title>
          <img className={styles.oasisLogo} src={oasis} alt="oasis" />
          <Text sx={{ textAlign: 'center', fontSize: '18px' }}>Добро пожаловать на сайт туристической базы отдыха и рыбалки «Оазис»! Мы рады предложить вам уютное и комфортабельное место для отдыха на природе, где вы сможете насладиться красотой окружающей природы и насыщенным досугом. </Text>
          <Text sx={{ textAlign: 'center', mt: 2, fontSize: '18px' }}>
            Наша база расположена в живописном месте, вдали от городской суеты, что позволит вам насладиться тишиной и спокойствием. Здесь вы сможете отдохнуть от повседневных забот, попробовать свои силы в рыбной ловле и провести время с семьей и друзьями.
          </Text>
          <Text sx={{ textAlign: 'center', mt: 2, fontSize: '18px' }}>На территории базы есть уютные домики, оборудованные всем необходимым для проживания, а также кафе, где можно насладиться вкусной домашней кухней.
            Мы приглашаем вас провести незабываемое время на базе отдыха и рыбалки "Оазис" и насладиться атмосферой природы и уюта.</Text>
        </Box>
      </Container >
      <div className={styles.lakeBackground} />
      <Container>


      </Container>
    </Box >
  )
}

export default HomePage
