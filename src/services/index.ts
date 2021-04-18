export const justCombineAllOfThem = (...numbers: Array<number>): number =>
  numbers.slice(1).reduce((result, num) => result + num, numbers[0])

export const justMinusAllOfThem = (...numbers: Array<number>): number =>
  numbers.slice(1).reduce((result, num) => result - num, numbers[0])

export const justMultiplyAllOfThem = (...numbers: Array<number>): number =>
  numbers.slice(1).reduce((result, num) => result * num, numbers[0])

export const justDivideAllOfThem = (...numbers: Array<number>): number =>
  numbers.slice(1).reduce((result, num) => result / num, numbers[0])
