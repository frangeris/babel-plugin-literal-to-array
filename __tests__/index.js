'use strict'
const { transform, transformSync } = require('@babel/core')
const taggedToArray = require('../src')

const opts = {
  plugins: [
    [taggedToArray, { keyword: 'mylib' }]
  ],
  ast: true
}
const cases = [
  {
    given: 'mylib`class1 class2 class3 class4`',
    expected: '[mylib.class1, mylib.class2, mylib.class3, mylib.class4];'
  }
]

describe('Babel Plugin tagged To Array', () => {
  it('should replace literals as arrays', () => {
    for (const { given, expected } of cases) {
      let { code } = transform(given, opts)
      expect(code).toEqual(expected)
    }
  })
})
