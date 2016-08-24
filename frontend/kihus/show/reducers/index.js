import { combineReducers } from 'redux'

import movesNumber from './moves_number.js'
import komas from './komas.js'

const reducer = combineReducers({
  movesNumber,
  komas
})

export default reducer