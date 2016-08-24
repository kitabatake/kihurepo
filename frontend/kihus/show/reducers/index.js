import { combineReducers } from 'redux'

import moves from './moves.js'
import komas from './komas.js'

const reducer = combineReducers({
  moves,
  komas
})

export default reducer