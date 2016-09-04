import moves from '../moves.js'
import * as ActionTypes from '../actions'

const toggleOwner = (owner) => owner === 'sente'? 'gote' : 'sente'

const processNextMove = (state, move) => {
  if (move.utsu && state.id === move.utsuKomaId) { 
    return Object.assign({}, state, {
      motigoma: false,
      x: move.to_x,
      y: move.to_y
    })
  }

  if (state.x === move.from_x && state.y === move.from_y) {
    return Object.assign({}, state, {
      x: move.to_x,
      y: move.to_y
    })
  }

  if (state.x === move.to_x && state.y === move.to_y) {
    moves.setGotKoma(move.id, state)
    return Object.assign({}, state, {
      x: null,
      y: null,
      motigoma: true,
      owner: toggleOwner(state.owner)
    })
  }

  return state
}

const processPrevMove = (state, move) => {
  if (state.x === move.to_x && state.y === move.to_y) {
    var nextState = Object.assign({}, state, {
      x: move.from_x,
      y: move.from_y
    })

    if (move.utsu) {
      nextState.motigoma = true
    }
    return nextState
  }

  var gotKoma = moves.getGotKomaOnMove(move.id)
  if (gotKoma && gotKoma.id === state.id) {
    return Object.assign({}, gotKoma)
  }

  return state
}

const koma = (state = {
  x: null,
  y: null,
  name: null,
  owner: null,
  motigoma: false
}, action) => {
  var move = action.move
  switch(action.type) {
    case ActionTypes.NEXT_MOVE:
      return processNextMove(state, move)
    case ActionTypes.PREV_MOVE:
      return processPrevMove(state, move)
    default:
      return state
  }
}

export default koma