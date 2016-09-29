'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decode = undefined;

var _nodeEmoji = require('node-emoji');

var _graphemeSplitter = require('../vendor/grapheme-splitter');

var _graphemeSplitter2 = _interopRequireDefault(_graphemeSplitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = require('lodash');


var splitter = new _graphemeSplitter2.default();

var emojiAlph = {
  a: '💯',
  b: '☕',
  c: '👽',
  d: '✡',
  e: '✨',
  f: '♑️',
  g: '⌨',
  h: '⚡',
  i: '⚽️',
  j: '⛑',
  k: '⛪️',
  l: '⭐',
  m: '🃏',
  n: '☯',
  o: '🚀',
  p: '🌂',
  q: '🌄',
  r: '🌈',
  s: '🌊',
  t: '🌍',
  u: '⛰',
  v: '⛩',
  w: '♊️',
  x: '⛎',
  y: '🍉',
  z: '🔥'
};

var alphEmoji = {};

for (var key in emojiAlph) {
  alphEmoji[emojiAlph[key]] = key;
}

var decode = exports.decode = function decode(emojiInput) {
  console.log(emojiInput);
  console.log(emojiInput.split(''));
  console.log(splitter.splitGraphemes(emojiInput));
  return splitter.splitGraphemes(emojiInput).map(function (char) {
    return alphEmoji[char] || '';
  }).join('');
};

// find the value from the input
//return the key


// take text, replace each letter with a corresponding emoji
//look at each letter,
// replace letter with corresponding emoji index
//