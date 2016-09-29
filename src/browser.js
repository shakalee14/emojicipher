import encode from './encode'
import decode from './decode'

$(function(){
  $('.decoded-input').on('keyup', function(event){
    const decodedString = $(this).val()
    const encodedString = encode(decodedString)
    $('.encoded-input').val(encodedString)
  })  
  $('.encoded-input').on('keyup', function(event){
    const encodedString = $(this).val()
    const decodedString = decode(encodedString)
    $('.decoded-input').val(decodedString)
  })

})
