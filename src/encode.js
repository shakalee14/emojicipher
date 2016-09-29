const _ = require('lodash')
import { get as getEmoji } from 'node-emoji'
import GraphemeSplitter from '../vendor/grapheme-splitter'
export default (code) => {
const emojiAlph = {
  a:'💯',
  b:'☕',
  c:'👽',
  d:'✡',
  e:'✨',
  f:'♑️',
  g:'⌨',
  h:'⚡',
  i:'⚽️',
  j:'⛑',
  k:'⛪️',
  l:'⭐',
  m:'🃏',
  n:'☯',
  o:'🚀',
  p:'🌂',
  q:'🌄',
  r:'🌈',
  s:'🌊',
  t:'🌍',
  u:'⛰',
  v:'⛩',
  w:'♊️',
  x:'⛎',
  y:'🍉',
  z:'🔥'
}


 const encode = ( inputStr ) => {

  let lowerStr = inputStr.toLowerCase()

  return _.map(lowerStr, character => emojiAlph[ character ] ).join('')
}
}
// take text, replace each letter with a corresponding emoji
//look at each letter,
  // replace letter with corresponding emoji index
//