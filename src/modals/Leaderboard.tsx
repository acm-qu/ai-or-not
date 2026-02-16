import { Group, Stack, Title, Text, Box, Container } from "@mantine/core"
import { useLocalStorage } from "@mantine/hooks"

import classes from './styles.module.css'

const Leaderboard = () => {

  const [leaderboard] = useLocalStorage({
    key: 'leaderboard',
    defaultValue: [
      JSON.stringify({ name: 'Alice', score: 10 }),
      JSON.stringify({ name: 'Bob', score: 8 }),
      JSON.stringify({ name: 'Charlie', score: 6 }),
    ]
  })

  const demoData = [
    JSON.stringify({ name: 'Alice', score: 10 }),
    JSON.stringify({ name: 'Bob', score: 8 }),
    JSON.stringify({ name: 'Charlie', score: 6 }),
    JSON.stringify({ name: 'Digger', score: 6 }),
    JSON.stringify({ name: 'Bigger', score: 6 }),
    JSON.stringify({ name: 'Bigger', score: 6 }),
    JSON.stringify({ name: 'Bigger', score: 6 }),
    JSON.stringify({ name: 'Bigger', score: 6 }),
    JSON.stringify({ name: 'Bigger', score: 6 }),
    JSON.stringify({ name: 'Bigger', score: 6 }),
  ]

  return (
    <Container className={classes.leaderboard}>
      <Title className={classes.title} order={2}>
        Leaderboard
      </Title>
      <Stack gap={28} h={500} className={classes.participants}>
        <Box className={classes.glow} />
        {
          leaderboard.sort((a, b) => JSON.parse(b).score - JSON.parse(a).score).map((entry, index) => {
            const { name, score } = JSON.parse(entry)
            const ranking = index + 1
            return (
              <Group key={index}
                className={`${classes.participant} ${classes[(ranking === 1 ? 'first' : ranking === 2 ? 'second' : ranking === 3 ? 'third' : '')]}`}> 
                <Box className={classes.ranking}><Text className={classes.text} span>{ranking}</Text></Box>
                <Group className={classes.info}>
                  <Title className={classes.name} order={3}>{name}</Title>
                  <Text className={classes.score} span><strong>{score}</strong> points</Text>
                </Group>
              </Group>
            )
          })
        }
      </Stack>
    </Container>
  )
}

export default Leaderboard