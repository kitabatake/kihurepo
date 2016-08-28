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
    console.log(this.gotKomasEachMoves)
  }

  getMoveForKomas(index) {
    if (index < 0 || index >= this.moves.length) {
      return null
    }
    return this.moves[index]
  }

  getGotKomaOnMove(move) {
    return this.gotKomasEachMoves[move]
  }
}

const moves = new Moves()

export default moves