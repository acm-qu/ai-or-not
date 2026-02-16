import { Modal } from "@mantine/core"
import { useMemo, useState } from "react"
import { Modals } from "../modals"
import { Pages } from "../pages"

function App() {

  const [modal, setModal] = useState<keyof typeof Modals | ''>('')
  const [gameState, setGameState] = useState<keyof typeof Pages>('idle')

  const CurrentModal = useMemo(() => modal ? Modals[modal] : () => <></>, [modal])
  const CurrentPage = useMemo(() => Pages[gameState], [gameState])

  const handleCloseModal = () => setModal('')

  return (
    <>
      <Modal withOverlay={true} closeOnClickOutside={true} opened={modal !== ''} onClose={handleCloseModal} withCloseButton={false}>
        <CurrentModal />
      </Modal>
      <CurrentPage
        setGameState={setGameState}
        setModal={setModal}
      />
    </>
  )
}

export default App