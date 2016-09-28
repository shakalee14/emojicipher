const emoji = require('node-emoji');
const _ = require('lodash')
import {decode} from '../src/client.js'

const emojiAlphabet = {
 'a':emoji.get('blackboy'), 'b':emoji.get('blackbaby'), 'c':emoji.get('blackprincess')}

console.log(emojiAlphabet)

// let result = Object.keys(emojiAlphabet).reduce(function(previous, key) {
//   return previous + emojiAlphabet[key].value
// }, 0)

// console.log(result.a)

