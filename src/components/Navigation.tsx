import { Button, Flex, Image } from "@mantine/core"

import classes from './styles.module.css'

const Navigation = ({ setModal }: { setModal: SetModal }) => {
  return (
    <Flex className={classes.navigation}>
      <Image src="/logo.png" alt="Logo" width={128} height={128} />
      <Button className={classes.button} onClick={() => setModal('leaderboard')}>Leaderboard</Button>
    </Flex>
  )
}

export default Navigation