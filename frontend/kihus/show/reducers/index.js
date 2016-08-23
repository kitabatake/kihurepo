import { combineReducers } from 'redux'

import movesNumber from './moves_number.js'
import moves from './moves.js'

const reducer = combineReducers({
  movesNumber,
  moves
})

export default reducer