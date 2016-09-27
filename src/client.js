const emoji = require('node-emoji');

console.log(emoji.get('blackbaby'));

import { emojiAlphabet } from '../src/emojiAlphabet.js'


export const decode = (str) => {
  const convertedstr = 'flamingo'

  if (convertedstr[0].charCodeAt()>96 && convertedstr[0].charCodeAt()<122) {
    convertedstr[0] = String.fromCharCode(emojiAlphabet[0])

    str = convertedstr.join("")
    console.log('str')
  }
  return str
}


