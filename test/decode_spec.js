import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'
const emoji = require('node-emoji')

import { decode } from '../src/decode.js'

const textAlph2 = 'abcdefghijklmnopqrstuvwxyz'

const emojiStringAZ = '💯👦🏿👽✡✨♑️♒️♐️♠️♥️◀️☪👶🏿☯🚀👧🏿👨🏿👸🏿✊🏿✋🏿⛰⛩♊️⛎🍉🔥'
console.log('emojiStringAZ:', emojiStringAZ.length, emojiStringAZ)

describe.only('decode', () => {
  it('outputs the corresponding emoji alphabet when the input is the alphabet', () => {
    expect (decode(emojiStringAZ)).toEqual(textAlph2)
  })
  it('outputs the corresponding emoji string when the input is a string', () => {
    expect (decode('💯👦🏿👽')).toEqual('abc')
  })
  it('outputs the corresponding emoji string when the input is a string', () => {
    expect (decode('👶🏿☯🚀')).toEqual('mno')
  })
  it('outputs the corresponding emoji string when the input is a string', () => {
    expect (decode('✊🏿♐💯◀💯')).toEqual('shaka')
  })
  it('outputs the corresponding emoji string when the input is a string', () => {
    expect (decode('☯💯♥✨✨')).toEqual('najee')
  })
})
