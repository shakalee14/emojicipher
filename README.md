# emojicipher
Emoji Cipher Challenge 

## Description

Let's build a cipher using emoji. High five!

To complete this goal, you'll create a Node.js module that exports two functions: one to encode a string of alphanumeric characters into emoji, and another to decode an emoji message to the original string.

Here's an example usage:

```javascript
import {encode, decode} from "emoji-cipher"

encode("secret message")
// => "😸🏃🐴👿🏃🤓 🐥🏃😸😸🌵🌎🏃"

decode("😸🏃🐴👿🏃🤓 🐥🏃😸😸🌵🌎🏃")
// => "secret message"
```

## Context

A cipher is "a secret or disguised way of writing; a code" (source: [Google](https://www.google.com/#q=cipher)). Technically, a cipher is a mapping between two sets of symbolsTranslating between different representations of data is a such a common task in programming, and a cipher is a good (and fun) way to become familiar with this process.

## Specifications

- [ ] Code is packaged as a module that exports (at least) the two functions `encode` and `decode`.
- [ ] Exported functions can encode and decode alphanumeric characters to/from emoji.
- [ ] Test Driven Development
- [ ] Interface is user friendly and attractive
- [ ] Deployed to Heroku 
- [ ] All source code is written using ECMAScript 2015 syntax.
- [x] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

Quality Rubric
- Code is well formatted without any linting errors
- Variables, functions, css classes, etc. are meaningfully named (no comments exist in code to explain functionality - the names serve that function)
- Code is well organized into a meaningful file structure


