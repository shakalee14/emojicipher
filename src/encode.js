const _ = require('lodash')

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
  return _.map(lowerStr, chr => emojiAlph[ chr ] || chr ).join('')
}

export default encode
