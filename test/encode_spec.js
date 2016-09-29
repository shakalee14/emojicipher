import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'
const emoji = require('node-emoji')

import encode from '../src/encode.js'

const textAlph2 = 'AbcDefghijklmnopqrstuvwxyz'

const emojiStringAZ = '💯☕👽✡✨♑️⌨⚡⚽️⛑⛪️⭐🃏☯🚀🌂🌄🌈🌊🌍⛰⛩♊️⛎🍉🔥'

describe ('encode', () => {
  it('outputs the corresponding emoji alphabet when the input is the alphabet', () => {
    expect (encode(textAlph2)).toEqual(emojiStringAZ)
  })
  it('outputs the corresponding emoji string when the input is a string', () => {
    expect (encode('abc')).toEqual('💯☕👽')
  })
  it('outputs the corresponding emoji string when the input is a string', () => {
    expect (encode('mno')).toEqual('🃏☯🚀')
  })
  it('outputs the corresponding emoji string when the input is a string', () => {
    expect (encode('shAka')).toEqual('🌊⚡💯⛪️💯')
  })
  it('outputs the corresponding emoji string when the input is a string', () => {
    expect (encode('Najee')).toEqual('☯💯⛑✨✨')
  })
  it('outputs the corresponding emoji string when the input has spaces', () => {
    expect (encode('i love you')).toEqual('⚽️ ⭐🚀⛩✨ 🍉🚀⛰')
  })
})
