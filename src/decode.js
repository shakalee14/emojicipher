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

const alphEmoji = {}

for ( let key in emojiAlph){
  alphEmoji[emojiAlph[key]] = key
}
console.log('emojiAlph:', emojiAlph)
console.log('alphEmoji:', alphEmoji)

export const decode = ( emojiInput ) => {
  return emojiInput.split('').map(char => {
    console.log('source:', char, 'target:', alphEmoji[char])
    alphEmoji[char] || ''
  }).join('')
}




// find the value from the input
//return the key



// take text, replace each letter with a corresponding emoji
//look at each letter,
  // replace letter with corresponding emoji index
//