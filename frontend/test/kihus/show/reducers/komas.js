import expect from 'expect.js'
import reducer, * as fromKomas from '../../../../kihus/show/reducers/komas.js'

var currentKomaId = 1
const createKoma = (params = {}) => {
  return Object.assign(
    {
      id: currentKomaId++,
      x: 1,
      y: 1,
      name: 'hu',
      owner: 'sente',
      motigoma: false
    },
    params
  )
}

// - sente
//   - 7, 7, hu
//   - 2, 8, hu
// - gote
//   - 7, 3, hu
//   - 1, 1, kin
const createState = (additional = []) => {
  var defaults = []
  defaults.push(createKoma({x: 7, y: 7}))
  defaults.push(createKoma({x: 2, y: 8}))
  defaults.push(createKoma({x: 7, y: 3, owner: 'gote'}))
  defaults.push(createKoma({x: 1, y: 1, owner: 'gote', name: 'kin'}))
  return [...defaults, ...additional]
}

describe('reducers/komas', () => {

  describe('initiate_komas action', () => {
    it('should return the initial state', () => {
      expect(
        reducer(undefined, {})
      ).to.eql([])
    })
  })

  describe('next_move action', () => {
    it('should apply move', () => {
      var state = reducer(
        createState(),
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
      var state = reducer(
        createState(),
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
      var state = reducer(
        createState(),
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

      var moved = fromKomas.getKomaByPosition(state, 7, 8)
      expect(moved).to.be.ok()
    })

    it('is prev toru case', () => {
      var move = {
        num: 1,
        from_x: 7,
        from_y: 7,
        to_x: 7,
        to_y: 3
      }

      var state = reducer(
        createState(),
        {
          type: 'next_move',
          move: move
        }
      )

      state = reducer(
        state,
        {
          type: 'prev_move',
          move: move
        }
      )

      var restoredKoma = fromKomas.getKomaByPosition(state, 7, 3)
      expect(restoredKoma.owner).to.be('gote')
      expect(restoredKoma.motigoma).to.be(false)
    })

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



