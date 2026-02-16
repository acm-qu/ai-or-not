import { Button, Flex, Image, Text } from "@mantine/core"

import classes from './styles.module.css'

const Navigation = ({ setModal }: { setModal: SetModal }) => {
  
  return (
    <Flex className={classes.navigation}>
      <Image src="/logo.png" alt="Logo" w={128} h={128} />
      <Button className={classes.button} variant="white" onClick={() => setModal('leaderboard')}>
        <Text span>Leaderboard</Text>
      </Button>
    </Flex>
  )
}

export default Navigation