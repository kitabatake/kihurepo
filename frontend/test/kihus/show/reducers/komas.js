import expect from 'expect.js'
import reducer, * as fromKomas from '../../../../kihus/show/reducers/komas.js'

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
      var defaults = reducer([], {
        type: 'initiate_komas'
      })

      var before = fromKomas.getKomaByPosition(defaults, 7, 7)
      var moved = reducer(
        defaults,
        {
          type: 'next_move'
        },
        {
          from_x: 7,
          from_y: 7,
          to_x: 7,
          to_y: 6
        }
      )

      after = fromKomas.getKomaByPosition(moved, 7, 6)
      expect(after).to.be(before)
    })
  })

  describe('prev_move action', () => {
    it('should apply move', () => {
      var defaults = reducer([], {
        type: 'initiate_komas'
      })

      var before = fromKomas.getKomaByPosition(defaults, 7, 7)
      var moved = reducer(
        defaults,
        {
          type: 'prev_move'
        },
        {
          from_x: 7,
          from_y: 8,
          to_x: 7,
          to_y: 7
        }
      )

      after = fromKomas.getKomaByPosition(moved, 7, 8)
      expect(after).to.be(before)
    })
  })
  
})



