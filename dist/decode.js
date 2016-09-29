'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphemeSplitter = require('../vendor/grapheme-splitter');

var _graphemeSplitter2 = _interopRequireDefault(_graphemeSplitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var decode = function decode(emojiInput) {
  var splitter = new _graphemeSplitter2.default();
  return splitter.splitGraphemes(emojiInput).map(function (char) {
    return alphEmoji[char] || char;
  }).join('');
};

exports.default = decode;