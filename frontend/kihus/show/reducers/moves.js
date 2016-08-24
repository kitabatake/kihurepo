const index = (state, action) => {
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

const data = (state, action) => {
  return []
}

const moves = (
  state = {
    index: 0,
    data: []
  },
  action
) => {
  return Object.assign({}, {
    index: index(state.index, action),
    data: data(state.data, action)
  })
}

export default moves