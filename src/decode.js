const _ = require('lodash')
import { get as getEmoji } from 'node-emoji'
import GraphemeSplitter from '../vendor/grapheme-splitter'

const splitter = new GraphemeSplitter()

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

const alphEmoji = {}

for ( let key in emojiAlph){
  alphEmoji[emojiAlph[key]] = key
}

export const decode = ( emojiInput ) => {
  console.log( emojiInput )
  console.log( emojiInput.split('') )
  console.log( splitter.splitGraphemes(emojiInput) )
  return splitter.splitGraphemes(emojiInput)
    .map(char => alphEmoji[char] || '')
    .join('')
}




// find the value from the input
//return the key



// take text, replace each letter with a corresponding emoji
//look at each letter,
  // replace letter with corresponding emoji index
//