type SetGameState = React.Dispatch<React.SetStateAction<'idle' | 'ongoing' | 'ended'>>
type SetModal = React.Dispatch<React.SetStateAction<'leaderboard' | ''>>

type PageType = {
  setGameState: SetGameState
  setModal: SetModal
}