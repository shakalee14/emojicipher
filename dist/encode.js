'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ = require('lodash');

var emojiAlph = {
  a: '💯',
  b: '👦🏿',
  c: '👽',
  d: '✡',
  e: '✨',
  f: '♑',
  g: '️♒',
  h: '️♐',
  i: '️♠',
  j: '️♥',
  k: '️◀',
  l: '️☪',
  m: '👶🏿',
  n: '☯',
  o: '🚀',
  p: '👧🏿',
  q: '👨🏿',
  r: '👸🏿',
  s: '✊🏿',
  t: '✋🏿',
  u: '⛰',
  v: '⛩',
  w: '♊',
  x: '️⛎',
  y: '🍉',
  z: '🔥'
};

var encode = exports.encode = function encode(inputStr) {

  var lowerStr = inputStr.toLowerCase();

  return _.map(lowerStr, function (character) {
    return emojiAlph[character];
  }).join('');
};

// take text, replace each letter with a corresponding emoji
//look at each letter,
// replace letter with corresponding emoji index
//