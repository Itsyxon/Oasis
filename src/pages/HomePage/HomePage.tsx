import { Box, Container, Stack } from '@mui/material'
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
          <Stack direction={'row'} mt={3} mb={3} gap={5} >
            <Text sx={{ mt: 2, fontSize: '18px' }}>
              Наша база расположена в живописном месте, вдали от городской суеты, что позволит вам насладиться тишиной и спокойствием. Здесь вы сможете отдохнуть от повседневных забот, попробовать свои силы в рыбной ловле и провести время с семьей и друзьями.
            </Text>
            <img className={styles.oasisLogo} src={oasis} alt="oasis" />
            <Text sx={{ mt: 2, fontSize: '18px' }}>На территории базы есть уютные домики, оборудованные всем необходимым для проживания, а также кафе, где можно насладиться вкусной домашней кухней.
              Мы приглашаем вас провести незабываемое время на базе отдыха и рыбалки "Оазис" и насладиться атмосферой природы и уюта.</Text>
          </Stack>
        </Box>
      </Container>
      <div className={styles.lakeBackground} />
      <Container>
        <Title variant='h4'>
          Преимущества нашего комплекса
        </Title>
      </Container>
    </Box >
  )
}

export default HomePage
