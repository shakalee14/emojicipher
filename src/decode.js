const _ = require('lodash')
import { get as getEmoji } from 'node-emoji'
import GraphemeSplitter from '../vendor/grapheme-splitter'

const splitter = new GraphemeSplitter()

const emojiAlph = {
  a:getEmoji('100'),
  b:getEmoji('blackboy'),
  c:getEmoji('alien'),
  d:getEmoji('star_of_david'),
  e:getEmoji('sparkles'),
  f:getEmoji('capricorn'),
  g:getEmoji('️aquarius'),
  h:getEmoji('️sagittarius'),
  i:getEmoji('️spades'),
  j:getEmoji('️hearts'),
  k:getEmoji('️arrow_backward'),
  l:getEmoji('star_and_crescent'),
  m:getEmoji('blackbaby'),
  n:getEmoji('yin_yang'),
  o:getEmoji('rocket'),
  p:getEmoji('blackgirl'),
  q:getEmoji('blackman'),
  r:getEmoji('blackprincess'),
  s:getEmoji('blackfist'),
  t:getEmoji('blackraised_hand'),
  u:getEmoji('mountain'),
  v:getEmoji('shinto_shrine'),
  w:getEmoji('gemini'),
  x:getEmoji('️ophiuchus'),
  y:getEmoji('watermelon'),
  z:getEmoji('fire')
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