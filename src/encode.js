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
  return inputStr
    .toLowerCase()
    .split()
    .map( character => emojiAlph[ character ] )
    .join('')
}

export default encode