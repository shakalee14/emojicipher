import encode from './encode'
import decode from './decode'

console.log('hello form browser.js')

window.Emoji = {
  encode: encode,
  decode: decode,
}
console.log(Emoji)