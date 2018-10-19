'use strict'
const { transform } = require('babel-core')
const literalToArray = require('../src')

const opts = {
  plugins: [
    [literalToArray]
  ]
}
const cases = [
  {
    given: 'testing`class1 class2 class3 class4`',
    expected: '[testing.class1, testing.class2, testing.class3, testing.class4]'
  }
]

describe('Babel Plugin Literal To Array', () => {
  it('should replace literals as arrays', () => {
    for (const { given, expected } of cases) {
      transform(given, opts)
    }
  })
})
