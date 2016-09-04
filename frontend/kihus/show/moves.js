// import { getKomaByPosition } from './reducers/komas.js'

class Moves {
  constructor() {
    this.moves = []
    this.gotKomasEachMoves = []
  }

  setMoves(moves) {
    this.moves = moves
    this.gotKomasEachMoves = new Array(moves.length)
  }

  setGotKoma(moveId, koma) {
    this.gotKomasEachMoves[moveId] = koma
  }

  getMove(index) {
    if (index < 0 || index >= this.moves.length) {
      return null
    }
    return this.moves[index]
  }

  getGotKomaOnMove(moveId) {
    return this.gotKomasEachMoves[moveId]
  }

  NumToOwner(num) {
    return (num % 2 == 1)? 'sente' : 'gote'
  }
}

const moves = new Moves()

export default moves