const movesNumber = (state = 0, action) => {
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

export default movesNumber