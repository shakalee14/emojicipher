'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodeEmoji = require('node-emoji');

var _graphemeSplitter = require('../vendor/grapheme-splitter');

var _graphemeSplitter2 = _interopRequireDefault(_graphemeSplitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = require('lodash');

exports.default = function (code) {
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

    return _.map(lowerStr, function (character) {
      return emojiAlph[character];
    }).join('');
  };
};
// take text, replace each letter with a corresponding emoji
//look at each letter,
// replace letter with corresponding emoji index
//