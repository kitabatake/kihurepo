import { combineReducers } from 'redux'
import komas, * as fromKomas from './komas.js'
import moves from '../moves.js'

const getMoveForKomas = (index, action) => {
  switch(action.type) {
    case 'next_move':
      return moves.getMoveForKomas(index - 1)
      break
    case 'prev_move':
      return moves.getMoveForKomas(index)
      break
  }
}


const movesIndex = (state, action) => {
  switch(action.type) {
    case 'prev_move':
      return state == 0? state : state - 1
      break
    case 'next_move':
    // TODO handle over moves size
      return state + 1
      break
    default:
      return state
  }
}

const reducer = (state = {
  movesIndex: 0,
  komas: []
}, action) => {
  var nextState = {}
  nextState.movesIndex = movesIndex(state.movesIndex, action)
  nextState.komas = komas(state.komas, action, getMoveForKomas(nextState.movesIndex, action))
  return nextState
};

export default reducer


// Selectors
// http://redux.js.org/docs/recipes/ComputingDerivedData.html

export const getOnBanKomas = (state) => {
  return fromKomas.getOnBanKomas(state.komas)
}

export const getMotigomas = (state, owner) => {
  return fromKomas.getMotigomas(state.komas, owner)
}