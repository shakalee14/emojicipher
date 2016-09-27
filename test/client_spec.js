import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import {decode} from '../src/client.js'

describe ('decode', () => {
  it('outputs the corresponding emoji string when the input is text', () => {
    expect (decode()).toEqual()
  })
  it('outputs an error message when the input is not text or emoji', () => {
    expect (decode()).toEqual()
  })
  it('outputs the corresponding text string when the input are emojis', () => {
    expect (decode()).toEqual()
  })
})
