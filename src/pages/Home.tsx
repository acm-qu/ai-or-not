import { Stack, Title, Text } from "@mantine/core"
import { Navigation } from "../components"

const Home = ({ setModal }: PageType) => {
  return (
    <Stack>
      <Navigation setModal={setModal} />
      <Title order={2}>Ai Or Not?</Title>
      <Text></Text>
    </Stack>
  )
}

export default Home