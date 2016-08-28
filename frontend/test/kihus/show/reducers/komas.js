import expect from 'expect.js'
import reducer, * as fromKomas from '../../../../kihus/show/reducers/komas.js'

// get motigoma case state
// teban: sente,
// moitogma: hu,
// num: 2
const initMotigomaCase = () => {
  var state = reducer([], {
    type: 'initiate_komas'
  })

  state = reducer(
    state,
    {
      type: 'next_move',
        move: {
        num: 1,
        from_x: 7,
        from_y: 7,
        to_x: 7,
        to_y: 3
      }
    }
  )

  return reducer(
    state,
    {
      type: 'next_move',
      move: {
        num: 2,
        from_x: 1,
        from_y: 3,
        to_x: 1,
        to_y: 4
      }
    }
  )
}

describe('reducers/komas', () => {

  describe('initiate_komas action', () => {
    it('should return the initial state', () => {
      expect(
        reducer(undefined, {})
      ).to.eql([])
    })

    it('should initiates komas', () => {
      var komas = reducer([], {
        type: 'initiate_komas'
      })

      var senteKomasNum = 0, goteKomasNum = 0
      komas.forEach((koma) => {
        if (koma.owner === 'sente') senteKomasNum++
        if (koma.owner === 'gote') goteKomasNum++
      })

      expect(senteKomasNum).to.be(20)
      expect(goteKomasNum).to.be(20)
    })
  })

  describe('next_move action', () => {
    it('should apply move', () => {
      var state = reducer([], {
        type: 'initiate_komas'
      })

      state = reducer(
        state,
        {
          type: 'next_move',
          move: {
            num: 1,
            from_x: 7,
            from_y: 7,
            to_x: 7,
            to_y: 6
          }
        }
      )

      var movedKoma = fromKomas.getKomaByPosition(state, 7, 6)
      expect(movedKoma).to.be.ok()
    })

    it('should process toru', () => {
      var state = reducer([], {
        type: 'initiate_komas'
      })

      state = reducer(
        state,
        {
          type: 'next_move',
          move: {
            num: 1,
            from_x: 7,
            from_y: 7,
            to_x: 7,
            to_y: 3
          }
        }
      )

      var takenKoma = fromKomas.getKomadaiKoma(state, 'hu', 'sente')
      expect(takenKoma.owner).to.be('sente')
      expect(takenKoma.motigoma).to.be(true)
    })

    // it('should process utsu', () => {
    //   var state = initMotigomaCase()
    //   state = reducer(
    //     state,
    //     {
    //       type: 'next_move',
    //       move: {
    //         num: 3,
    //         from_x: null,
    //         from_y: null,
    //         to_x: 5,
    //         to_y: 5,
    //         koma: 'hu',
    //         utsu: true
    //       }
    //     }
    //   )

    //   var hu = fromKomas.getKomaByPosition(state, 5, 5)
    //   expect(hu.x).to.be(5)
    //   expect(hu.y).to.be(5)
    //   expect(hu.motigoma).to.be(false)
    // })
  })

  describe('prev_move action', () => {
    it('should apply move', () => {
      var defaults = reducer([], {
        type: 'initiate_komas'
      })
      var moved = reducer(
        defaults,
        {
          type: 'prev_move',
          move: {
            num: 1,
            from_x: 7,
            from_y: 8,
            to_x: 7,
            to_y: 7
          }
        }
      )

      var moved = fromKomas.getKomaByPosition(moved, 7, 8)
      expect(moved).to.be.ok()
    })

  //   it('is prev toru case', () => {
  //     var defaults = reducer([], {
  //       type: 'initiate_komas'
  //     })

  //     var move = {
  //       num: 1,
  //       from_x: 7,
  //       from_y: 7,
  //       to_x: 7,
  //       to_y: 3
  //     }
  //     var torareruKoma = fromKomas.getKomaByPosition(defaults, 7, 3)
  //     reducer(
  //       defaults,
  //       {
  //         type: 'next_move',
  //         move: move
  //       }
  //     )

  //     expect(torareruKoma.owner).to.be('sente')
  //     expect(torareruKoma.motigoma).to.be(true)

  //     reducer(
  //       defaults,
  //       {
  //         type: 'prev_move',
  //         move: move
  //       }
  //     )

  //     expect(torareruKoma.owner).to.be('gote')
  //     expect(torareruKoma.motigoma).to.be(false)

  //   })

  //   it('should process utsu', () => {
  //     var move = {
  //       num: 3,
  //       from_x: null,
  //       from_y: null,
  //       to_x: 5,
  //       to_y: 5,
  //       koma: 'hu',
  //       utsu: true
  //     }
  //     var state = initMotigomaCase()
  //     state = reducer(
  //       state,
  //       {
  //         type: 'next_move',
  //         move: move
  //       }
  //     )

  //     var hu = fromKomas.getKomaByPosition(state, 5, 5)
  //     expect(hu.x).to.be(5)
  //     expect(hu.y).to.be(5)
  //     expect(hu.motigoma).to.be(false)

  //     state = reducer(
  //       state,
  //       {
  //         type: 'prev_move',
  //         move: move
  //       }
  //     )

  //     expect(hu.x).to.be(null)
  //     expect(hu.y).to.be(null)
  //     expect(hu.motigoma).to.be(true)
  //   })
  })
})



