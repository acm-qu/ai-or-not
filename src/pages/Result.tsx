import { Stack, Container, Title, Text, Button, TextInput, Group } from "@mantine/core"
import { Navigation } from "../components"
import { useState } from "react"
import { useLocalStorage } from "@mantine/hooks"
import { IconCheck } from "@tabler/icons-react"

import classes from './styles.module.css'

const Result = ({ setModal, setScore, score = 0 }: PageType) => {
  const [name, setName] = useState<string>('')
  const [leaderboard] = useLocalStorage({
    key: 'leaderboard',
    defaultValue: []
  })

  const handleAddToLeaderboard = () => {
    if (!name.trim()) return

    const entry = JSON.stringify({ name: name.trim(), score })
    const updatedLeaderboard = [...leaderboard, entry]
    localStorage.setItem('leaderboard', JSON.stringify(updatedLeaderboard))

    setName('')
    setScore?.(0)
    setModal?.('leaderboard')
  }

  return (
    <Stack className={classes.home} gap={0}>
      <Navigation setModal={setModal} />
      <Container className={`${classes.content} ${classes.result}`}>
        <Title className={classes.title} order={2}>You scored {score} Points!</Title>
        <Text className={classes.subtitle}>Wanna add your name to the leaderboard?</Text>
      </Container>
      <Group justify="center" gap="md" style={{ paddingBottom: '40px' }}>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddToLeaderboard()}
          className={classes.resultInput}
        />
        <Button
          className={classes.resultButton}
          variant="white"
          onClick={handleAddToLeaderboard}
          disabled={!name.trim()}
        >
          <IconCheck className={classes.icon} size={18} />
          <Text span>Add</Text>
        </Button>
      </Group>
    </Stack>
  )
}

export default Result