const emoji = require('node-emoji');
const _ = require('lodash')
import { emojiAlphabet } from '../src/emojiAlphabet.js'


const emojiAlph = '💯'

export const decode = ( collection ) => {
  let decodedStr = ""

  return collection.replace(collection[0], emojiAlph)
}

// export const decode = ( collection, replace ) => {
//   let newCollection = _.map( collection, replace)
//   console.log(emojiAlphabet)

//   for (let index = 0; index < collection.length; index++){
//     let char = collection.charAt(index)
//       if (char >= 65 && char <= 122 && _.isMatch(char, emojiAlphabet) === true){

//     }
//   }

  


//    //make new string join.cipherText

//   return newCollection
//   console.log(newCollection)
// }

// const replace = ( collection ) => {

//   for( let index = 0; index < collection.length; index++)
//     if(collection[index] === emojiAlphabet[index]){
//       return emojiAlphabet[index]
//     }
// }


// export const detect = ( collection ) => {
//   let lowerCollection = _.lowercase(collection)
//   console.log(collection)
//   let message = 'Please enter only text or emoji'
//   let ch = ''
//   for( let index = 0; index < lowerCollection.length; index++)
//     if(lowerCollection[index] === textAlph[ch]){
//       return lowerCollection 
//     } 
//   for( let index = 0; index < lowerCollection.length; index++)
//    if(lowerCollection[index] === emojiAlphabet.key()){
//       return lowerCollection 
//     }
//   for( let index = 0; index < lowerCollection.length; index++)
//    if(lowerCollection[index] !== emojiAlphabet.key() && lowerCollection[index] !== textAlph[ch] ){
//       return message 
//     }
// }



// const textAlph = 'abcdefghijklmnopqrstuvwxyz'

// let cipherText = ""

// const emojiAlphabet = {
//  a: getEmoji('blackboy'), b: getEmoji('blackbaby'), c: getEmoji('blackprincess')}

// let reverseObject = givenObject => {
//   let newObject = {}
//   Object.keys(givenObject).forEach( k => {
//     let v = givenObject[k]
//     newObject[v] = k
//   });
//   return newObject
// }

// const encode = str => {
//   return str.toLowerCase()
//   .split('')
//   .map(encodeChar)
//   .join('')
// }

// console.log(encode('abcde'))

// const encodeChar = ch => {
//   return ('abcdefghijklmnopqrstuvwxyz'.indexOf(ch) >= 0) ? emojiAlphabet[ch] : ch
// }

// export const decode = emojiStr => {
//   const reverseCipher = reverseObject(emojiAlphabet)
//   let alphaStr = '';
  
//   var chars = emojiStr.split('')
//   while (chars.length > 0) {
//     var emoji = chars.shift()
//     while (!reverseCipher[emoji]) {
//       if (chars.length === 0) return alphaStr
//       emoji += chars.shift()
//     }
//     alphaStr += reverseCipher[emoji]
//   }
//   return alphaStr
// }




// export const decode = ( collection, shift=1 ) => {
//   let result = ""

  
  // for (let index = 0; index < collection.length; index++){
  //   let char = collection.charAt(index)
  //     if (char >= 65 && char <= 122 && _.isMatch(char, emojiAlphabet) === true){

  //   }
   
//     return result += collection.charAt(index)
//   }
// }
