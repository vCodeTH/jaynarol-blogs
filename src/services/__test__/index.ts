import {
  justCombineAllOfThem,
  justMinusAllOfThem,
  justMultiplyAllOfThem,
  justDivideAllOfThem,
} from '../index'

describe('all functions', () => {
  describe('justCombineAllOfThem', () => {
    test('1+1 should be 2', () => {
      const numbers = [1, 1]
      const expected = 2

      expect(justCombineAllOfThem(...numbers)).toEqual(expected)
    })
  })

  describe('justMinusAllOfThem', () => {
    test('1-1 should be 0', () => {
      const numbers = [1, 1]
      const expected = 0

      expect(justMinusAllOfThem(...numbers)).toEqual(expected)
    })
  })

  describe('justMultiplyAllOfThem', () => {
    test('2*2 should be 4', () => {
      const numbers = [2, 2]
      const expected = 4

      expect(justMultiplyAllOfThem(...numbers)).toEqual(expected)
    })
  })

  describe('justDivideAllOfThem', () => {
    test('2/2 should be 1', () => {
      const numbers = [2, 2]
      const expected = 0

      expect(justDivideAllOfThem(...numbers)).toEqual(expected)
    })
  })
})
