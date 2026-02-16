import { Stack, Container, Title, Text, Button } from "@mantine/core"
import { Navigation } from "../components"

import { IconDeviceGamepad } from "@tabler/icons-react"

import classes from './styles.module.css'

const Home = ({ setModal, setGameState }: PageType) => {
  return (
    <Stack className={classes.home} gap={0}>
      <Navigation setModal={setModal} />
      <Container className={classes.content}>
        <Title className={classes.title} order={2}>Ai Or Not?</Title>
        <Text className={classes.subtitle}>Test your knowledge of AI vs. Not-AI content!</Text>
      </Container>
      <Button className={classes.button} variant="white" onClick={() => setGameState('ongoing')}>
        <IconDeviceGamepad size={28} className={classes.icon} />
        <Text span>Play Now</Text>
      </Button>
    </Stack>
  )
}

export default Home