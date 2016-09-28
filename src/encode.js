const _ = require('lodash')

const emojiAlph = {
  a:'💯',
  b:'👦🏿',
  c:'👽',
  d:'✡',
  e:'✨',
  f:'♑',
  g:'️♒',
  h:'️♐',
  i:'️♠',
  j:'️♥',
  k:'️◀',
  l:'️☪',
  m:'👶🏿',
  n:'☯',
  o:'🚀',
  p:'👧🏿',
  q:'👨🏿',
  r:'👸🏿',
  s:'✊🏿',
  t:'✋🏿',
  u:'⛰',
  v:'⛩',
  w:'♊',
  x:'️⛎',
  y:'🍉',
  z:'🔥'
}

export const encode = ( inputStr ) => {
  let lowerStr = inputStr.toLowerCase()

  return _.map(lowerStr, character => emojiAlph[ character ] ).join('')
}

// take text, replace each letter with a corresponding emoji
//look at each letter,
  // replace letter with corresponding emoji index
//