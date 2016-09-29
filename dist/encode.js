'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ = require('lodash');

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

var encode = function encode(inputStr) {
  var lowerStr = inputStr.toLowerCase();
  return _.map(lowerStr, function (chr) {
    return emojiAlph[chr] || chr;
  }).join('');
};

exports.default = encode;