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
    return Object.assign({}, state, {
      x: null,
      y: null,
      motigoma: true,
      owner: toggleOwner(state.owner),
      gotMovesIndexes: [...state.gotMovesIndexes, move.id]
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

  if (state.gotMovesIndexes.length > 0 && state.gotMovesIndexes[state.gotMovesIndexes - 1] === move.id) {
    let nextGotMovesIndexes = state.gotMovesIndexes.length === 1? [] : [...state.gotMovesIndexes.pop()]
    return Object.assign({}, state, {
      x: move.to_x,
      y: move.to_y,
      motigoma: false,
      owner: toggleOwner(state.owner),
      gotMovesIndexes: nextGotMovesIndexes
    })
  }

  // var gotKoma = moves.getGotKomaOnMove(move.id)
  // if (gotKoma && gotKoma.id === state.id) {
  //   return Object.assign({}, gotKoma)
  // }

  return state
}

const koma = (state = {
  x: null,
  y: null,
  name: null,
  owner: null,
  motigoma: false,
  gotMovesIndexes: []
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