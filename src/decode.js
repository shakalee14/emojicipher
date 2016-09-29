import GraphemeSplitter from '../vendor/grapheme-splitter'

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

const decode = ( emojiInput ) => {
  const splitter = new GraphemeSplitter()
  return splitter.splitGraphemes(emojiInput)
    .map(char => alphEmoji[char] || char)
    .join('')
}

export default decode
