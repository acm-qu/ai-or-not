type SetGameState = React.Dispatch<React.SetStateAction<'idle' | 'ongoing' | 'ended'>>
type SetModal = React.Dispatch<React.SetStateAction<'leaderboard' | ''>>
type SetScore = React.Dispatch<React.SetStateAction<number>>

type PageType = {
  setGameState: SetGameState
  setModal: SetModal
  score?: number
  setScore?: SetScore
}