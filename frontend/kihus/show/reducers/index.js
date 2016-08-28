import { combineReducers } from 'redux'
import komas, * as fromKomas from './komas.js'

const movesIndex = (state, action) => {
  switch(action.type) {
    case 'prev_move':
    case 'next_move':
      return action.movesIndex
    default:
      return state
  }
}

const reducer = combineReducers({
  movesIndex,
  komas
})

export default reducer


// Selectors
// http://redux.js.org/docs/recipes/ComputingDerivedData.html

export const getOnBanKomas = (state) => {
  return fromKomas.getOnBanKomas(state.komas)
}

export const getMotigomas = (state, owner) => {
  return fromKomas.getMotigomas(state.komas, owner)
}