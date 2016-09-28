import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'
const emoji = require('node-emoji')

import {decode} from '../src/client.js'

const emojiAlph = '💯'

const emojiAlpha = {
 a:emoji.get('blackboy'), b:emoji.get('blackbaby'), c:emoji.get('blackprincess')}

console.log(Object.keys(emojiAlph))
console.log(Object.keys(emojiAlpha))

const textAlph = 'abc'

console.log(Object.keys(textAlph))


describe ('decode', () => {
  it('outputs the corresponding emoji string when the input is text', () => {
    expect (decode(textAlph)).toEqual('💯bc')
  })
  it('outputs an error message when the input is not text or emoji', () => {
    expect (decode('abc')).toEqual('💯👦🏿👽')
  })
  it('outputs the corresponding text string when the input are emojis', () => {
    expect (decode()).toEqual()
  })

  it('outputs the emojis for ABC when the input is an abc string', () => {
    expect (decode('abc')).toEqual(emojiAlphAZ)
  })
})
