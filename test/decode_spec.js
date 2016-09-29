import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'
import {get as getEmoji} from 'node-emoji'

import decode from '../src/decode.js'

const textAlph2 = 'abcdefghijklmnopqrstuvwxyz'

const emojiStringAZ = '💯☕👽✡✨♑️⌨⚡⚽️⛑⛪️⭐🃏☯🚀🌂🌄🌈🌊🌍⛰⛩♊️⛎🍉🔥'


describe('decode', () => {
  it('outputs the corresponding emoji alphabet when the input is the alphabet', () => {
    expect (decode(emojiStringAZ)).toEqual(textAlph2)
  })
  it('outputs the corresponding emoji string when the input is a string', () => {
    const emojiStr = [
      getEmoji('100'),
      getEmoji('alien'),
    ].join('')
    expect (decode(emojiStr)).toEqual('ac')
  })
  it('outputs the corresponding emoji string when the input is a string', () => {
    expect (decode('🃏☯🚀')).toEqual('mno')
  })
  it('outputs the corresponding emoji string when the input is a string', () => {
    expect (decode('🌊⚡💯⛪️💯')).toEqual('shaka')
  })
  it('outputs the corresponding emoji string when the input is a string', () => {
    expect (decode('☯💯⛑✨✨')).toEqual('najee')
  })
})
