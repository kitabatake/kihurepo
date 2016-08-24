import { combineReducers } from 'redux'
import komas from './komas.js'

const getMove = (index) => {
  return index == 0? null : gon.moves[index - 1]
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
  nextState.komas = komas(state.komas, action, getMove(nextState.movesIndex))
  return nextState
};

export default reducer