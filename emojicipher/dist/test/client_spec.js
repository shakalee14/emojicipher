'use strict';

var _mocha = require('mocha');

var _mocha2 = _interopRequireDefault(_mocha);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _client = require('../public/javascripts/client.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getAllLetters', function () {
  it('does what its supposed to', function () {
    (0, _expect2.default)((0, _client.getAllLetters)()).toEqual();
  });
});