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
  a: (0, _nodeEmoji.get)('100'),
  b: (0, _nodeEmoji.get)('blackboy'),
  c: (0, _nodeEmoji.get)('alien'),
  d: (0, _nodeEmoji.get)('star_of_david'),
  e: (0, _nodeEmoji.get)('sparkles'),
  f: (0, _nodeEmoji.get)('capricorn'),
  g: (0, _nodeEmoji.get)('️aquarius'),
  h: (0, _nodeEmoji.get)('️sagittarius'),
  i: (0, _nodeEmoji.get)('️spades'),
  j: (0, _nodeEmoji.get)('️hearts'),
  k: (0, _nodeEmoji.get)('️arrow_backward'),
  l: (0, _nodeEmoji.get)('star_and_crescent'),
  m: (0, _nodeEmoji.get)('blackbaby'),
  n: (0, _nodeEmoji.get)('yin_yang'),
  o: (0, _nodeEmoji.get)('rocket'),
  p: (0, _nodeEmoji.get)('blackgirl'),
  q: (0, _nodeEmoji.get)('blackman'),
  r: (0, _nodeEmoji.get)('blackprincess'),
  s: (0, _nodeEmoji.get)('blackfist'),
  t: (0, _nodeEmoji.get)('blackraised_hand'),
  u: (0, _nodeEmoji.get)('mountain'),
  v: (0, _nodeEmoji.get)('shinto_shrine'),
  w: (0, _nodeEmoji.get)('gemini'),
  x: (0, _nodeEmoji.get)('️ophiuchus'),
  y: (0, _nodeEmoji.get)('watermelon'),
  z: (0, _nodeEmoji.get)('fire')
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