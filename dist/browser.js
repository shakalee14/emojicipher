'use strict';

var _encode = require('./encode');

var _encode2 = _interopRequireDefault(_encode);

var _decode = require('./decode');

var _decode2 = _interopRequireDefault(_decode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
  $('.decoded-input').on('keyup', function (event) {
    var decodedString = $(this).val();
    var encodedString = (0, _encode2.default)(decodedString);
    $('.encoded-input').val(encodedString);
  });
  $('.encoded-input').on('keyup', function (event) {
    var encodedString = $(this).val();
    var decodedString = (0, _decode2.default)(encodedString);
    $('.decoded-input').val(decodedString);
  });
});