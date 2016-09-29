import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import encode from '../src/encode.js'
import decode from '../src/decode.js'

describe ('integration', () => {
  it('an encode and decode should result in the same input', () => {
    const assertEqual = (input) => {
      const encodedInput = encode(input)
      const decodedInput = decode(encodedInput)
      expect(decodedInput).toEqual(input)
    }
    assertEqual('i love you')
    assertEqual('!@#$%^&*()-=123456789/*-+')
  })
})
