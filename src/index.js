"use strict";

class Token {
  constructor(pattern) {
    this.pattern = pattern
  }
  round(length, pattern) {
    // ns nS nsS
    length = length || 32;
    pattern = pattern || this.pattern || 'nlu';
    let str = '';
    for (let i = 0, len = pattern.length; i < len; i++) {
      switch (pattern[i]) {
        case 'n':
          str += '0123456789';
          break;
        case 'l':
          str += 'abcdefghijklmnopqrstuvwxyz';
          break;
        case 'u':
          str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          break;
        default:
          throw new Error('Token pattern wrang.');
      }
    }
    let res = '';
    for (let i = 0; i < length; i++) {
      res += str.charAt((Math.floor(Math.random() * str.length)));
    }
    return res;
  }
}

//noinspection JSUnresolvedVariable
module.exports = Token;
