const toggleOwner = (owner) => owner === 'sente'? 'gote' : 'sente'

const processNextMove = (state, move) => {
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

  // TODO restore taken koma

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
    case 'next_move':
      return processNextMove(state, move)
    case 'prev_move':
      return processPrevMove(state, move)
    default:
      return state
  }
}

export default koma