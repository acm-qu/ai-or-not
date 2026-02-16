import { Stack } from "@mantine/core"
import { Navigation } from "../components"

const Home = ({ setModal }: PageType) => {
  return (
    <Stack>
      <Navigation setModal={setModal} />
    </Stack>
  )
}

export default Home