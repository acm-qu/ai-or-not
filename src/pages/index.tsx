import { default as Home } from './Home'
import { default as Game } from './Game'
import { default as Result } from './Result'

export const Pages = {
  'idle': Home,
  'ongoing': Game,
  'ended': Result
}